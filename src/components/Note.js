import {MdDeleteForever} from 'react-icons/md';

function Note() {
    return (
        <div className="note">
            <span>Hello, this is the first note</span>
            <div className="note-footer">
                <small>20/03/2023</small>
                <MdDeleteForever className='delete-icon' size={'1.3em'}/>
            </div>
        </div>
    )
}

export default Note;