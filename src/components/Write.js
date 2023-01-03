import React from "react";
import "../css/write.css";

function Write() {
    return (
        <div className='Write'>
            <div>
                <input type='text' id='title_txt' placeholder='제목' />
            </div>
            <div>
                <textarea id='content_txt' placeholder='내용을 입력하세요.'/>
            </div>
            <div>
                <button className='button'>글추가</button>
            </div>
        </div>
    )
}

export default Write;