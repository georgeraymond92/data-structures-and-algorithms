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
    for(let i = 0; i < this.adjacencyList[vertexOne].length; i++) {
      this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
        v => v !== vertexTwo
      )
      this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
        v => v !== vertexOne
      )
    }

  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length){
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    
  }
}

const g = new Graph();

g.addVertex('Seattle');
g.addVertex('Los Angeles');
g.addVertex('New York');
g.addVertex('San Francisco');
g.addEdge('Seattle','Los Angeles');
g.addEdge('Seattle','New York');
g.addEdge('Seattle','San Francisco');
g.addEdge('New York','Los Angeles');
g.addEdge('New York','San Francisco');
g.addEdge('Los Angeles','San Francisco');
g.removeEdge('San Francisco', 'New York');
g.removeVertex('Los Angeles');


console.log(g.adjacencyList);



module.exports = Graph;