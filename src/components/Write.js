import React, { useState } from "react";

const Write = () => {
    const [title,setTitle] = useState('');
    const [name,setName] = useState();
    const [pwd,setPwd] = useState();
    const [content,setContent] = useState();

    const addContent = () => {
        
    }

    return (
        <div>
            <form onSubmit={addContent}>
            <div>
                <input 
                    type="text"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    placeholder="제목"
                />
            </div>
            <div>
                <input 
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    placeholder="작성자"
                />
            </div>
            <div>
                <input 
                    type="password"
                    onChange={(e)=>setPwd(e.target.value)}
                    value={pwd}
                    placeholder="비밀번호"
                />
            </div>
            <div>
                <textarea 
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}
                />
            </div>
            <div>
                <button type="submit">글쓰기</button>
            </div>
            </form>
        </div>
    )
}

export default Write;