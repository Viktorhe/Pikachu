import React from 'react';
import ButtonCustom from './button'
import InputCustom from './input'

class Headers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: 0,
            uri: 'http://www.pokemonget.eu/shop/979-thickbox_default/pikachu-birthday-event-pokemon.jpg',
            status: false,
            color: 'pink',
            fetch: [{
                id: 1,
                name: 'akbar'
            }, {
                id: 2,
                name: 'yoga'
            }, {
                id: 3,
                name: 'irul'
            }]
        }
    }
    tambah() {
        let now = this.state.date
        this.setState({
            date: now + 1
        })
    }
    kurang() {
        let now = this.state.date
        if (now > 0) {
            this.setState({
                date: now - 1
            })
        } else {
            alert('ups')
        }
    }
    hacktiv() {
        if (this.state.date > 10) {
            return <div>anda sudah melebihi batas kemampuan anda</div>
        } else {
            return (
                <div>Hacktiv{this.state.date}</div>
            )
        }
    }
    ganti_image() {
        if (this.state.status === false) {
            this.setState({
                uri: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png',
                status: true
            })
        } else {
            this.setState({
                uri: 'http://www.pokemonget.eu/shop/979-thickbox_default/pikachu-birthday-event-pokemon.jpg',
                status: false
            })
        }
    }
    ganti_warna() {
        if (this.state.color === 'pink') {
            this.setState({
                color: 'blue'
            })
        } else {
            this.setState({
                color: 'pink'
            })
        }
    }
    fetching() {
        if (typeof(this.state.fetch) == 'object') {
            return (
                this.state.fetch.map((e, idx) => {
                    return (
                        <div key={idx}>{e.id} : {e.name}</div>
                    )
                })
            )
        } else {
            return <div>DATA TYPE NOT SUPPORTED</div>
        }
    }
    insput(e) {
        console.log('INI INPUT',e);
    }
    render() {
        return (
            <div>
                <div style={{backgroundColor: this.state.color}} className='header'>   
                    <div className='header-frame'>
                        <img 
                            onClick={() => this.ganti_image()} 
                            style={{width: '100%'}} 
                            src={this.state.uri}
                            alt='hehe'
                        />
                    </div>
                    <div className='header-content'>
                        <div onClick={() => this.ganti_warna()} className='header-title'>
                            Hacktiv8 MeetUP
                        </div>
                        <div className='header-isi'>
                            <div className='header-isi-attr'>
                                {this.fetching()}
                            </div>
                            <div className='header-isi-value'>
                                <div>Jakarta</div>
                                <div>Sesi17</div>
                                {this.hacktiv()}
                            </div>
                        </div>
                        <ButtonCustom
                            onClick={() => this.tambah()}
                            color='red'
                            value='Tambah'
                        ></ButtonCustom>
                        <ButtonCustom
                            onClick={() => this.kurang()}
                            color='blue'
                            value='kurang'
                        ></ButtonCustom>
                        <InputCustom
                            value_attr={'INI VALUE BARU'}
                            name_attr={'akbar'}
                            defaultValue='HEHE'
                            props_input={(e) =>  this.props.props_input_main(e)}
                            
                        ></InputCustom>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Headers