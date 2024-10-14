import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userid, setUserid] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();

    const memberOk = async (e) => {
        e.preventDefault();
        const userData = {
            userid,
            pwd,
            email
        };
        
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            navigate("/")
            // 여기에 회원가입 성공 후 처리 로직 추가
        } catch (error) {
            console.error('Error:', error);
            // 여기에 에러 처리 로직 추가
        }
    }

    return (
        <div id="member-container">
            <form onSubmit={memberOk}>
                <div>
                    <input 
                        type="text"
                        onChange={(e) => setUserid(e.target.value)}
                        value={userid}
                        id="userid"
                        placeholder="아이디"
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        id="pwd"
                        placeholder="비밀번호"
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        placeholder="이메일"
                    />
                </div>
                <div><button type="submit">회원가입</button></div>
            </form>
        </div>
    )
}

export default Login;