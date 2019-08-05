import React from 'react';
import axios from 'axios'

import Headers from './components/header'
import NavBars from './components/navbar'
import Containers from './components/container/container'
import Pagination from './components/pagination'
import { async } from 'q';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propsan_bro: "",
            data_page:1,
            data_resp: {
                results: []
            }
        }
    }

    componentWillMount() {
        this.fetching(1)
        console.log('AKU WILL MOUNT');
    }
    componentDidMount() {
        // this.fetching_try()
        console.log('AKU DID MOUNT');
    }
    changePage(newPage){
        let newCurrentPage = parseInt(newPage)
        this.setState({page:newCurrentPage},() => {
            this.fetching(newCurrentPage)
        });
        // console.log('new state page : ',this.state.page);
        // this.fetching(newCurrentPage);
    }
    
    fetching(page=1) {
        let emptyArr = {results:[]}
        let currentUrl = `https://swapi.co/api/people/?page=${page}`;
        this.setState({data_resp: emptyArr})
        // console.log('new url : ',currentUrl);
        let opt = {
            // header: 'adouhaodbuauod209y08gqydvqudh9qw0d',
            method: 'GET',
            // url: 'https://jsonplaceholder.typicode.com/posts'
            url: currentUrl
        }
        axios(opt)
        .then(({data}) => {
            // console.log(data)
            this.setState({data_resp:data})
            // console.log('change data : ',data);
        })
        .catch(error => {
            console.log(error);
        })   
         
    }
    
    // async fetching_try() {
    //     let opt = {method: 'GET', url:'https://jsonplaceholder.typicode.com/posts'}
    //     try {
    //         let response = await axios(opt)
    //         console.log(response)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    render () {
        return (
            <div>
                <NavBars></NavBars>
                <Headers 
                    props_input_main={(e) => this.setState({propsan_bro: e})}
                >
                </Headers>
                <Pagination 
                totalRecords={this.state.data_resp.count}
                currentPage={this.state.page}
                recordsPerPage={10}
                changePage = {(e) => this.changePage(e)}
                ></Pagination>
                <Containers 
                props_list= {this.state.propsan_bro}
                datas = {this.state.data_resp.results}
                ></Containers>
            </div>
        )
    }
}



export default Main