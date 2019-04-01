'use strict';

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex){
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
  }

  removeEdge(vertexOne,vertexTwo) {

      this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
        v => v !== vertexTwo
      )
      this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
        v => v !== vertexOne
      )


  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    
  }

  dfsRecursive(node) {
    const adjacencyList = this.adjacencyList;
    let visited = {};
    let results = [];



    let _walk = (vertex) => {


      if(!vertex) {
        return null;
      }

      visited[vertex] = true;
      results.push(vertex);


      adjacencyList[vertex].forEach(neighbor => {

        if(!visited[neighbor]){
          return _walk(neighbor);
       }

      });

    }

    _walk(node);

    if(results.length){
      console.log(`Results: ${results}`);
      return;
    }

    return 'this vertex has no edges';

  }
}

const g = new Graph();

g.addVertex('Seattle');
g.addVertex('Los Angeles');
g.addVertex('New York');
g.addVertex('Detroit');
g.addVertex('San Francisco');
g.addEdge('Seattle','Los Angeles');
g.addEdge('Seattle','New York');
g.addEdge('Seattle','San Francisco');
g.addEdge('New York','Los Angeles');
g.addEdge('New York','San Francisco');
g.addEdge('Los Angeles','San Francisco');
g.addEdge('Detroit','San Francisco');
g.removeEdge('San Francisco', 'New York');
g.removeVertex('Los Angeles');


console.log(g.adjacencyList);
g.dfsRecursive("Seattle");



module.exports = Graph;