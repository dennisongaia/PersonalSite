import React, {useRef, useState} from 'react'
import {ReactSketchCanvas} from "react-sketch-canvas";
import {Cross1Icon, DownloadIcon, EraserIcon, Pencil1Icon, ResetIcon} from '@radix-ui/react-icons'
import Title from "../Title/Title";
import './Play.css'

const heading = ["Play."];
const subheading = "Have fun with the current activity."

const Play = () => {
    const canvasRef = useRef(null);
    const [eraser, setEraser] = useState(false);
    const [strokeColor, setStrokeColor] = useState("#6497eb");
    const [active, setActive] = useState('');

    const styles = {
        borderRadius: "16px"
    }

    const handleEraserClick = () => {
        setEraser(true);
        setActive('eraser');
        canvasRef.current?.eraseMode(true);
    };

    const handlePenClick = () => {
        setEraser(false);
        setActive('pen');
        canvasRef.current?.eraseMode(false);
    };

    const handleUndoClick = () => {
        setActive('');
        canvasRef.current?.undo();
    };

    // const handleRedoClick = () => {
    //     setActive('');
    //     canvasRef.current?.redo();
    // };

    const handleClearClick = () => {
        setActive('');
        canvasRef.current?.clearCanvas();
    };

    const onColorChange = (event) => {
        setActive('');
        setStrokeColor(event.target.value);
    };

    const handleSaveImage = async () => {
        setActive('');
        if (canvasRef.current) {
            try {
                const dataUrl = await canvasRef.current.exportImage("jpeg");
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'canvas_image.jpeg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error("Error exporting image:", error);
            }
        }
    }

    return (
        <div>
            <Title heading={heading} subheading={subheading}/>

            <div className="CanvasWrapper">
                <div className="ButtonWrapper">
                    <div className="Button">
                        <input
                            title="Color"
                            className="Color"
                            type="color"
                            value={strokeColor}
                            onChange={onColorChange}
                        />
                    </div>
                    <button
                        type="button"
                        className={`Button Pen ${active === 'pen' ? "Active" : " "}`}
                        disabled={!eraser}
                        onClick={handlePenClick}
                    >
                        <Pencil1Icon className="Icon"/>
                    </button>
                    <button
                        type="button"
                        className={`Button Eraser ${active === 'eraser' ? "Active" : " "}`}
                        disabled={eraser}
                        onClick={handleEraserClick}
                    >
                        <EraserIcon className="Icon"/>
                    </button>
                    <button
                        type="button"
                        className="Button Undo"
                        onClick={handleUndoClick}
                    >
                        <ResetIcon className="Icon"/>
                    </button>
                    <button
                        type="button"
                        className="Button Clear"
                        onClick={handleClearClick}
                    >
                        <Cross1Icon className="Icon"/>
                    </button>
                    <button
                        type="button"
                        className="Button Download"
                        onClick={handleSaveImage}
                    >
                        <DownloadIcon className="Icon"/>
                    </button>
                </div>
                <div className="Canvas">
                    <ReactSketchCanvas
                        ref={canvasRef}
                        width="100%"
                        height="100%"
                        canvasColor="white"
                        // canvasColor="var(--color-white30)"
                        // backgroundImage = "",
                        // exportWithBackgroundImage = false,
                        // preserveBackgroundImageAspectRatio = "none",
                        strokeColor={strokeColor}
                        styles={styles}
                    />
                </div>
            </div>
        </div>
    );
}
export default Play
