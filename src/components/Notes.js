import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Sidebar from './Sidebar';
import './style/notes.css';

export default function Notes() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [totalPages, setTotalPages] = useState(0);
    const [startPage, setStart] = useState(1);
    const [topicNo, setTopic] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageScale, setPageScale] = useState(2);
    const [adDisplay, setAdDisplay] = useState(false);
    const [topicCompleted, setTopicCompleted] = useState([1, 2, 4])
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    /*Will be deleted when connected to backend*/
    const topicList = [{no: 1, topic: "Unit 1: Introduction to Python", start: 1, end: 50 }, {no: 2, topic: "Unit 2: Datastructure and its types", start: 51, end: 89 }, {no: 3, topic: "Unit 3: Loops: While Do-While For", start: 90, end: 120 }, {no:4, topic: "Unit 4: Functions", start: 121, end: 175 }];

    useEffect(()=>{
        //setTopicCompleted([1, 2, 4]);
        setTotalPages(topicList[0].end);
    }, []);
    
    const handleSave=(currTopicNo)=>{
        //ref3.current.style.backgroundColor = '#28a745';
        //ref3.current.style.color = '#fff';
        setTopicCompleted([...topicCompleted, currTopicNo]);
    }

    const url =
        "https://cors-anywhere.herokuapp.com/https://ncu.rcnpv.com.tw/Uploads/20131231103232738561744.pdf";

    function addShow() {
        if (pageNumber % 10 === 0) {
            setAdDisplay(true);
            ref1.current.style.display = 'none';
            ref2.current.style.display = 'block';

        }
        else {
            setAdDisplay(false);
            ref2.current.style.display = 'none';
            ref1.current.style.display = 'block';
        }

    }


    function onDocumentLoadSuccess({ numPages }) {
        setTotalPages(totalPages);
    }

    function handleZoomIn() {
        if (pageScale < 3) {
            setPageScale(pageScale + 0.2);
        }
    }

    function handleZoomOut() {
        if (pageScale > 2) {
            setPageScale(pageScale - 0.2);
        }
    }

    function handleNext() {
        if (pageNumber < totalPages) {
            addShow()
            if (adDisplay) {
                setPageNumber(pageNumber);
            }
            else {
                setPageNumber(pageNumber + 1);
            }
        }
    }
    function handlePrevious() {
        if (pageNumber > 0) {
            addShow()
            if (adDisplay) {
                setPageNumber(pageNumber);
            }
            else {
                setPageNumber(pageNumber - 1);
            }
        }
    }
    return (
        <>

            <div className="App">
                <div >
                    <div className="button-container" style={{ width: '650px', height: '50px', position: 'relative' }}>

                        <button class="navbar-toggler" style={{ position: 'absolute', left: '0', bottom: '0' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <i class="material-icons" style={{ backgroundColor: 'inherit', fontSize: '30px' }}>list</i>
                        </button>
                        <Sidebar setPageNumber={setPageNumber} setTotalPages={setTotalPages} setTopic={setTopic} setStart={setStart} topicList={topicList} topicCompleted={topicCompleted} handleSave={handleSave}/>
                        <div style={{ position: 'absolute', right: '0' }}>
                            <button type="button" class="btn btn-light cmpt-btn" ref={ref3} onClick={()=>handleSave(topicNo)}>
                                <span>Completed</span>
                            </button>
                            <i class="material-icons" style={{ padding: '4px 5px', position: 'relative', top: '7px', cursor: 'pointer' }}>bookmark_border</i>
                            <span style={{padding: '0 .5rem'}}>Page <b>{adDisplay ? '-' : pageNumber - startPage + 1}</b> of <b>{totalPages - startPage + 1}</b></span>
                            <button type="button" class="btn btn-light pageNav" onClick={handleZoomIn} disabled={pageScale >= 3} style={{ width: '3rem', height: '2rem' }}>
                                <i class="material-icons vertical-center" style={{ fontSize: '24px' }} >zoom_in</i>
                            </button>
                            <button type="button" class="btn btn-light pageNav" onClick={handleZoomOut} disabled={pageScale <= 2} style={{ width: '3rem', height: '2rem' }}>
                                <i class="material-icons vertical-center" style={{ fontSize: '24px' }}>zoom_out</i>
                            </button>
                            <button type="button" class="btn btn-light pageNav" onClick={handlePrevious} disabled={pageNumber === 1} style={{ width: '3rem', height: '2rem' }}>
                                <i class="material-icons vertical-center">arrow_back</i>
                            </button>
                            <button type="button" class="btn btn-light pageNav" onClick={handleNext} disabled={pageNumber === totalPages} style={{ width: '3rem', height: '2rem' }}>
                                <i class="material-icons vertical-center">arrow_forward</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={ref1} className="page-container">
                    <Document file="python.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} scale={pageScale} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                </div>
                <div ref={ref2} className="ad">
                    <h1>This is an add</h1>
                </div>
            </div>
        </>
    );
}