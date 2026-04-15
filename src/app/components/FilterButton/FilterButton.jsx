'use client'
import { FriendContext } from "@/Contexts/FriendsProvider";
import { useContext } from "react";
import { toast } from "react-toastify";


const FilterButton = () => {
    const { timeLine, setTimeLine, filter, setFilter } = useContext(FriendContext);

    const handelRemove = () => {
        setTimeLine([])
        toast.error('Clear History')
    }

    return (
        <div className="flex justify-between gap-2">
            <label className="select outline-none">
                <span className="label">Filter </span>
                <select>
                    <option onClick={() => setFilter('all')}>timeline</option>
                    <option onClick={() => setFilter('call')}>Call</option>
                    <option onClick={() => setFilter('text')}>Text</option>
                    <option onClick={() => setFilter('video')}>Video</option>
                </select>
            </label>
            <div>
                <div>
                    <button onClick={ handelRemove} className="btn btn-error"> <span className="flex lg:hidden">X</span>
                    <span className="hidden lg:flex">Clear All</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterButton;