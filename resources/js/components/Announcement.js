import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Card} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function Announcement() {
    const [wysiwyg, setWysiwyg] = useState("");
    const [parsed, setParsed] = useState("");

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const handleEditorChange = content => {
        setWysiwyg(content);
        setParsed(content);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            'title' : title,
            'content' : content,
        };
    }
        return (
            <Card style={{border: "none"}}>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <h3 className="mb-5 mt-4 text-center">Preview Announcement</h3>
                <Card className="mb-4" style={{borderColor: "black", borderWidth:"3px", height:"400px" }}>
                    <div className="wysiwyg" value={content} onInput={ e=>setContent(e.target.value) }>{wysiwyg && ReactHtmlParser(wysiwyg)}</div>
                    </Card>
                <Card className="text-center" style={{ marginBottom: "10%", width: "50%", marginLeft:"25%", border: "none" }}>
                    <TextField id="outlined-basic"
                               label="Announcement Name"
                               variant="outlined"
                               value={title}
                               onInput={ e=>setTitle(e.target.value)}
                    />
                    <Box mb={4} />
            <Editor
                apiKey="ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a"
                initialValue="<p>Initial content</p>"
                init={{
                    height: 200,
                    selector: 'textarea',
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount',
                        'preview'
                    ],
                    menubar: 'file edit view insert format tools table tc help',
                    toolbar:
                        'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                }}
                onEditorChange={handleEditorChange}
            />
                    <Box mt={4} />
                    <Button variant="contained">Save Announcement</Button>
                </Card>
                </form>
            </Card>
        );
}
