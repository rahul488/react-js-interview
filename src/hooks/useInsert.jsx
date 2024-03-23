const useInsert = () => {

    const insertNode=(location,strtIndex,node,currNode)=> {
        if (strtIndex >= location.length) {
          node.push(currNode);
          return node;
        }
        let latestNode=node[location.charAt(strtIndex)].children;
        latestNode = insertNode(location, strtIndex + 1, latestNode, currNode);
        return node;
    }

    return { insertNode };
}
export default useInsert;