function accessibleCells(matrix){
    const visited = matrix.map(row=>row.map(()=>false))
    const area = []
    const rows=matrix.length
    const cols=matrix[0].length
    
    function dfs(r,c, currArea){
        if(r<0||c<0||r>=rows||c>=cols||
            matrix[r][c]!=='0'||visited[r][c])
            return
        
        visited[r][c]=true
        currArea.push([r,c])
        dfs(r+1,c, currArea)
        dfs(r-1,c, currArea)
        dfs(r,c+1, currArea)
        dfs(r,c-1, currArea)
    }

    for(let r=0;r<rows;r++)
        for(let c=0;c<cols;c++)
            if(matrix[r][c]==='0'&& !visited[r][c]){
                const currArea=[]
                dfs(r,c,currArea)
                area.push(currArea)
            }

    return area  
}

const matrix = [
    ['1', '1', '0', '0'],
    ['0', '1', '0', '0'],
    ['1', '0', '1', '1'],
    ['0', '0', '1', '1']
  ];
console.log(accessibleCells(matrix))  