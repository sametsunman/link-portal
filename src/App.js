import React,{useEffect} from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import {useStorage} from './hooks/useStorage';
import {useDispatch, useSelector} from 'react-redux';
import initialState from './context/store';



function App() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const {storageItem,saveStorage} = useStorage('@storage');

    useEffect(() => {
        
        if(storageItem)
            dispatch({ type: 'SET_STATE_FROM_STORAGE', payload: storageItem });

    }, [dispatch,storageItem]);

    useEffect(() => {
        if(state.links!==initialState.links)
            saveStorage(state);
    }, [state, saveStorage])



    return (
        <Container>
            <Header />
            <Content />
            <Footer />
        </Container>
    );
}

export default App;