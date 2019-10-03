/**
 * @description Classe que representa uma API GraphQL.
 * @author douglas.panhota
 */
module.exports = class Schema {

    constructor(typeDefs, resolvers){

        this.typeDefs = typeDefs;
        this.resolvers = resolvers;

    }

}