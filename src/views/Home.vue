<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <b-form inline>
          <b-input
            v-model="newItem"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="New Item"
            @keydown.enter.prevent="addGroceryItem"
          ></b-input>
          <b-button variant="primary" @click.prevent="addGroceryItem">
            Add
          </b-button>
        </b-form>
        <br />
      </div>
  
      <div class="row mt-4 justify-content-center">
        <b-col md="6" sm="12">
          <b-list-group class>
            <b-list-group-item v-for="(item, index) in listItems" :key="index">
              <b-row class="flex-row">
                <b-col class="d-flex justify-content-around align-items-center">
                  {{ item.itemName }}
                  <b-button
                    size="sm"
                    variant="danger"
                    @click="deleteGroceryItem(item.id)"
                  >
                    Delete
                  </b-button>
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </div>
    </div>
</template>
  
  <script>
  import {Auth, API, graphqlOperation} from "aws-amplify";

  import * as queries from "../graphql/queries";
  import * as mutations from "../graphql/mutations";
  import * as subscriptions from "../graphql/subscriptions";
import { graphql } from "graphql";

    export default {
      name: "Home",
      data() {
        return {
          listItems: [],
          newItem: ""
        }
      },
      
      async mounted() {
        const currentUser = await Auth.currentAuthenticatedUser();
        const that = this;

        API.graphql(graphqlOperation(subscriptions.onCreateGroceryListItem, {
          owner: currentUser.username
         })
        ).subscribe({
          next: action => {
            that.listItems.push(action.value.data.onCreateGroceryListItem);
          }
        });

        API.graphql(graphqlOperation(subscriptions.onDeleteGroceryListItem, {
          owner: currentUser.username
         })
        ).subscribe({
          next: action => {
            const id = action.value.data.onDeleteGroceryListItem.id;
            const index = that.listItems.map(x => x.id).indexOf(id);
            that.listItems.splice(index, 1);
          }
        });
      },

      async created() {
        const{ data } = await API.graphql(
          graphqlOperation(queries.listGroceryListItems)
        );

        data.listGroceryListItems.items.forEach(item => {
          this.listItems.push(item);
        })
      },
      methods: {
        async addGroceryItem() {
          await API.graphql(
            graphqlOperation(mutations.createGroceryListItem, {
              input: { itemName: this.newItem}
          })
         );

         this.newItem = "";
        },
        async deleteGroceryItem(id) {
          await API.graphql(
            graphqlOperation(mutations.deleteGroceryListItem, {
              input: { id: id}
          })
         );
      }
    };
    </script>
