import React, {useState} from 'react';
import axios from "axios";
import {Editor} from '@tinymce/tinymce-react';

import Layout from "../../containers/templates/Layout";
import {CREATE_ANNOUNCEMENT} from "../../utils/ApiUrl";
import {authOptions} from "../../utils/Api";
import ReactHtmlParser from "react-html-parser";

import swal from "sweetalert";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slide from '@material-ui/core/Slide';
import {TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ImageHandler from "../../components/announcement/ImageHandler";


function TransitionUp(props) {
    return <Slide {...props} direction="up"/>;
}

export default function CreateAnnouncement() {
    const [wysiwyg, setWysiwyg] = useState("");
    const [parsed, setParsed] = useState(parsed ?? '');
    const [title, setTitle] = useState("");
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);

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
            'title': title,
            'content': parsed,
        };
        axios.post(CREATE_ANNOUNCEMENT, data, authOptions).then(response => {
            if (response.status === 200) {
                swal({
                    title: "Done!",
                    text: "Announcement Created Successfully",
                    icon: "success",
                })

                setTitle("");
                setParsed("");
                setWysiwyg("");

            }
        }).catch((error) => {
                if (error.response) {
                    swal({
                        title: "Error!",
                        text: (error.message),
                        icon: "error",
                        dangerMode: true,
                    })
                }
            }
        )
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} noValidate>
                <Typography variant="h4" style={{textAlign: 'center'}}> Create Announcement</Typography>
                <Box mb={3}/>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                </Grid>
                <Box mb={5}/>
                <div className="text-center" style={{
                    marginBottom: "10%",
                    width: "80%",
                    marginLeft: "10%",
                    border: "none",
                    backgroundColor: "none"
                }}>
                    <TextField id="outlined-basic"
                               label="Announcement Name"
                               variant="outlined"
                               value={title}
                               onInput={e => setTitle(e.target.value)
                               }
                               style={{width: "40%"}}
                               required
                    />
                    <Box mb={4}/>
                    <Editor
                        apiKey='ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a'
                        value={parsed}
                        // initialValue={parsed}
                        init={{
                            height: 400,
                            max_width: 1920,
                            max_height: 1080,
                            autoresize_max_width: 1920,
                            autoresize_max_height: 1080,
                            selector: 'textarea#full-featured-non-premium',
                            plugins: [
                                'print preview paste importcss searchreplace autolink autosave directionality code ' +
                                'visualblocks visualchars fullscreen image link media template codesample table charmap ' +
                                'hr pagebreak nonbreaking textcolor colorpicker anchor toc insertdatetime advlist lists' +
                                ' wordcount imagetools textpattern noneditable help charmap emoticons image code'
                            ],
                            menubar: 'file edit view insert format table tc help',
                            toolbar:
                                ' a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed' +
                                ' permanentpen table | link image | undo redo | bold italic underline strikethrough | ' +
                                'forecolor backcolor | fontselect fontsizeselect formatselect | ' +
                                'alignleft aligncenter alignright alignjustify | outdent indent |' +
                                '  numlist bullist checklist | ' +
                                'forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak |' +
                                ' charmap emoticons | preview save print | insertfile image media pageembed template ' +
                                'link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
                            toolbar_mode: 'floating',
                            theme_advanced_buttons3_add : 'fullscreen',
                            fullscreen_new_window : true,
                            image_title: true,
                            automatic_uploads: true,
                            file_picker_types: 'image',
                            media_live_embeds: true,
                            media_poster: true,
                            paste_data_images: true,
                            convert_urls: false,
                            relative_urls: false,
                            remove_script_host: false,
                            audio_template_callback: function (data) {
                                return '<audio controls>' + '\n<source src="' + data.source1 + '"' +
                                    (data.source1mime ? ' type="' + data.source1mime + '"' : '') +
                                    ' />\n' +
                                    '</audio>';
                            },
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }',
                            images_upload_handler: ImageHandler
                        }}

                        onEditorChange={handleEditorChange}
                    />
                    <Box mt={4}/>
                    <Button type="submit" variant="contained" onClick={handleClick(TransitionUp)}>Save
                        Announcement</Button>
                </div>
            </form>
        </Layout>
    );
}
