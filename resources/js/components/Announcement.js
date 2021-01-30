import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Card} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import axios from "axios";
import DashboardTemplate from "../containers/templates/Dashboard";
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

export default function Announcement() {
    const [wysiwyg, setWysiwyg] = useState("");
    const [parsed, setParsed] = useState("");

    const [title, setTitle] = useState("");

    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditorChange = content => {
        setWysiwyg(content);
        setParsed(content);
    };


    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            'title' : title,
            'content' : parsed,
        };
        const token = localStorage.getItem('access_token');
        axios.post('http://localhost:8000/api/announcement/create', data,{
            headers: {
                'Authorization': `Bearer ${token}`
            },

        }).then(response => {
            if (response.status === 200){
                console.log('success input data');
                return (
                    <Snackbar
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={transition}
                        message="I love snacks"
                        key={transition ? transition.name : ''}
                    />
                )
            }else{
                console.log('failed');
            }
        }).catch(() => {
            console.log('failed input data');
        });
    }
        return (
            <DashboardTemplate>
                <form onSubmit={handleSubmit} noValidate>
                <h3 className="mb-5 mt-4 text-center">Preview Announcement</h3>
                <Card className="mb-4" style={{borderColor: "black", borderWidth:"3px", height:"400px" }}>
                    <div className="wysiwyg">{wysiwyg && ReactHtmlParser(wysiwyg)}</div>
                    </Card>
                <div className="text-center" style={{ marginBottom: "10%", width: "80%", marginLeft:"10%", border: "none", backgroundColor: "none" }}>
                    <TextField id="outlined-basic"
                               label="Announcement Name"
                               variant="outlined"
                               value={title}
                               onInput  ={ e=>setTitle(e.target.value)
                               }
                               style={{width: "40%"}}
                    />
                    <Box mb={4} />
            <Editor
                apiKey='ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a'
                init={{
                    height: 200,
                    selector: 'textarea#full-featured-non-premium',
                    plugins: [
                        'print preview paste importcss searchreplace autolink autosave directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap emoticons'
                    ],
                    menubar: 'file edit view insert format tools table tc help',
                    toolbar:
                        ' a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                    toolbar_mode: 'floating',
                }}
                onEditorChange={handleEditorChange}
            />
                    <Box mt={4} />
                    <Button type="submit" variant="contained" onClick={handleClick(TransitionUp)}>Save Announcement</Button>
                </div>
                </form>
            </DashboardTemplate>
        );
}
