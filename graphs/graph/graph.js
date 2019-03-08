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
    this.adjacencyList[vertexTwo].pusht(vertexOne);
  }

  removeEdge(vetexOne,vertexTwo) {
    for(let i = 0; i < adjacencyList[vetexOne].length; i++) {
      this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
        v => v !== vertexTwo
      )
      this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
        v => v !== vertexOne
      )
    }

  }
}