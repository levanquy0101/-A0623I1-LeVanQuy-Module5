import { useEffect, useState } from "react";


function Selector() {

    return (
        <div>
            <label htmlFor="">
                <select name="">
                    <option value="0">Java</option>
                    <option value="1">Angular</option>
                    <option value="2">Javascript</option>
                    <option value="3">Php</option>
                </select>
            </label>
            <h2>Bạn đã chọn: </h2>
        </div>
    )
}
export default Selector;