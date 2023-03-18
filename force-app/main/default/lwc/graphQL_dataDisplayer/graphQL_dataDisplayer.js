import { LightningElement,wire } from 'lwc';
import { gql, graphql } from 'lightning/uiGraphQLApi';

export default class GraphQL_dataDisplayer extends LightningElement {
    @wire(graphql, {
        query: gql`
            query AccountInfo {
                uiapi {
                    query {
                        Account(where: { Name: { like: "Burlington Textiles Corp of America" } }) @category(name: "recordQuery") {
                            edges {
                                node {
                                    Name @category(name: "StringValue") {
                                        value
                                        displayValue
                                    }
                                }
                            }
                        }
                   }
              }
        }`
    })
    accounts({error,data}){
        if(data){
            console.log(data.uiapi.query.Account.edges.map(edge => edge.node));
        }
        else if (error){
            console.error(error);
        }
    };
}