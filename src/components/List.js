import React, { useEffect, useState } from "react";

function List() {
    const [lists,setLists] = useState([]);

    useEffect(()=>{
        fetchList();
    },[]);

    const fetchList = () => {
        fetch('http://localhost:5000/list')
        .then(response => response.json())
        .then(data => setLists(data))
    }

    return(
        <div>
            <h1>게시판</h1>
            <table>
                <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>작성일</th>
                </tr>
                {lists.map((content)=>(
                    <tr key={content.id}>
                        <td>{content.title}</td>
                        <td>{content.name}</td>
                        <td>{content.readnum}</td>
                        <td>{content.writeday}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List