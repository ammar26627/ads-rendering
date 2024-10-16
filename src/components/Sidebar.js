import './style/sidebar.css'
import { useEffect, useRef, useState } from 'react';

export default function Sidebar({ setPageNumber,setTotalPages, setTopic, setStart, topicList, topicCompleted, handleSave}) {
    const [topicDisplay, setTopicDisplay] = useState(true);
    const ref1 = useRef(null); 
    const ref2 = useRef(null);
    const ref3 = useRef(null); 
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    

    const handleClick = (event) => {
        setPageNumber(parseInt(event.target.getAttribute('data-start')));
        setStart(parseInt(event.target.getAttribute('data-start')));
        setTotalPages(parseInt(event.target.getAttribute('data-end')));
        setTopic(parseInt(event.target.getAttribute('data-topic')))
    };

    const handleTopicClick = ()=> {
            ref1.current.style.display= 'block';
            ref2.current.style.display= 'none';
            ref3.current.style.backgroundColor= 'inherit';
            ref3.current.style.borderBottom= '1.5px solid #ffffffcf';
            ref4.current.style.backgroundColor= '#121111';
            ref4.current.style.borderBottom= 'unset';
    }

    const handleBookmarkClick = ()=> {
            ref1.current.style.display= 'none';
            ref2.current.style.display= 'block';
            ref3.current.style.backgroundColor= '#121111';
            ref3.current.style.borderBottom= 'unset';
            ref4.current.style.backgroundColor= 'inherit';
            ref4.current.style.borderBottom= '1.5px solid #ffffffcf';
    }

    const handleClickSave = (event, topNo)=>{
        
            event.target.checked= false;
        
    }

    
    const listItems = topicList.map((number) =>
        <li class="nav-item topics" key={number.no}>
            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" checked={topicCompleted.includes(number.no)} onChange={()=>handleClickSave(number.no)}/>
            <label class="form-check-label point"  data-start={number.start} data-end={number.end} data-topic={number.no} onClick={handleClick}>{number.topic}</label>
        </li>
    );

    topicList.map((number) =>
    console.log(topicCompleted)
);
    return (
        <div class="offcanvas offcanvas-end text-bg-dark" style={{ textAlign: 'left' }} tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header" style={{justifyContent: 'space-evenly'}}>
                <div className='topics-heading' ref={ref3} onClick={handleTopicClick}>
                    <h5>Topics</h5>
                </div>
                <div className='bookmarks-heading' ref={ref4} onClick={handleBookmarkClick}>
                    <h5>Bookmarks</h5>
                </div>    
            </div>
            <div ref={ref1} class="offcanvas-body" id='topics'>
                <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {listItems}
                </ul>
            </div>
            <div ref={ref2} class="offcanvas-body" id='bookmarks' style={{display: 'none'}}>
                <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {/*
                    <li class="nav-item topics">
                        <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                        <label class="form-check-label point">Third checkbox</label>
                    </li>*/}
                </ul>
            </div>
        </div>

    )
}
