import React from 'react';
import './Pages.css';
import Collection from "../Components/Collection";
import AddNewBtn from "../Components/AddNewBtn";
import {connect} from "react-redux";

const AllMangas  = ({mangas}) => {
    return (
        <div id='all-mangas--root'>
            {mangas.map(collection =>
               <Collection collection={collection}/>
            )}
            <AddNewBtn />
        </div>
    )
}

const mapStateToProps = (state) => ({
    mangas: state.mangas
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllMangas);
