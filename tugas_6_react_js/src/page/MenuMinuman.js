import React, {Component} from 'react';
import  DaftarMinuman from '../lib/DaftarMinuman';
import Header from './Header';

class MenuMinuman extends Component {
    render(){
        return(
            <div>
                <Header />
                <h3>Daftar Minuman Favourite</h3>
                <table style={{width:'100%'}} >
                    <tbody>
                        <tr>
                            {DaftarMinuman.map((data,index) => {
                                return(
                                <td key={index}>
                                    <center>
                                        <img src={data.img} alt="Product Minuman" width="150" height="100" />
                                        <p>{data.NamaMinuman}</p>
                                        <p>Harga : Rp. {data.Harga}</p>
                                    </center>
                                </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MenuMinuman;