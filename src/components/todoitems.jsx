import React from 'react';
import tick from '../assets/tick.png';
import nottick from '../assets/not_tick.png';
import deleteicon from '../assets/delete.png';

const todoitems = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {
    return (
        <div className="flex item-center my-3 gap-2">
            <div
                onClick={() => {
                    toggleComplete(id);
                }}
                className="flex flex-1 items-center cursor-pointer"
            >
                <img src={isComplete ? tick : nottick} alt="" className="w-7" />
                <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' : ''}`}>{text}</p>
            </div>
            <img
                onClick={() => {
                    deleteTodo(id);
                }}
                src={deleteicon}
                alt=""
                className="w-5 cursor-pointer"
            />
        </div>
    );
};

export default todoitems;
