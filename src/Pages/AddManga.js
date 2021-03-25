import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {addVolume, addCollection} from "../redux/manga";
import TabPanel from "../Components/TabPanel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        height: 64
    },
    indicator: {
        backgroundColor: 'black'
    },
    wrapper: {
        fontSize: 18,
        fontWeight: 700
    },
    notchedOutline: {
        borderColor: 'yellow'
    }
}));

const AddManga  = ({mangas, addVolume, addCollection}) => {
    const [volumes, setVolumes] = useState(null);
    const [collection, setCollection] = useState(null);
    const [cover, setCover] = useState(null);
    const [value, setValue] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => setCollection(''), [value])

    const handleFormSubmit = () => {
        if (collection && volumes) {
            const addedVolumes = volumes.split(',').map(v => Number(v))
            if (value === 1) {
                addVolume({ collection, volumes: addedVolumes });
            }
            if (value === 0) {
                addCollection({ collection, cover, volumes: addedVolumes });
            }

            setSubmitted(true);
        }
    };

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='add-manga--container'>
            <Tabs
                className='add-manga--tabs'
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                variant="fullWidth"
                classes={{
                    indicator: classes.indicator,
                    flexContainer: classes.flexContainer
                }}
            >
                <Tab className='add-manga--tab' classes={{wrapper: classes.wrapper}} label="add manga" />
                <Tab className='add-manga--tab' classes={{wrapper: classes.wrapper}} label="add volumes" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className='add-manga--form'>
                    <input
                        className='add-manga--input'
                        placeholder='Title'
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setCollection(e.target.value)}
                        value={collection}
                    />
                    <input
                        className='add-manga--input'
                        placeholder='Cover'
                        type="link"
                        id="cover"
                        name="cover"
                        onChange={(e) => setCover(e.target.value)}
                    />
                    <input
                        placeholder='Volume'
                        type="text"
                        className='add-manga--input'
                        id="volumes"
                        name="volumes"
                        onChange={(e) => setVolumes(e.target.value)}
                    />
                    <button className='add-manga--btn' onClick={handleFormSubmit}>Save</button>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='add-manga--form'>
                    <select
                        className='add-manga--select'
                        id="collection"
                        name="collection_name"
                        onChange={(e) => setCollection(e.target.value)}
                        value={collection}
                    >
                        <option selected>Select a collection</option>
                        {
                            mangas.map(manga =>
                                <option value={manga.title}>{manga.title}</option>
                            )
                        }
                    </select>
                    <input
                        className='add-manga--input'
                        placeholder='Volume'
                        type="text"
                        id="volumes"
                        name="volumes"
                        onChange={(e) => setVolumes(e.target.value)}
                    />
                    <button className='add-manga--btn' onClick={handleFormSubmit}>Save</button>
                </div>
            </TabPanel>
            {submitted && <Redirect to="/" />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    mangas: state.mangas
});

const mapDispatchToProps = (dispatch) => ({
    addVolume: payload => dispatch(addVolume(payload)),
    addCollection: payload => dispatch(addCollection(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddManga);

