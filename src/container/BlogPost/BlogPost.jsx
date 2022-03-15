import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state = {     //komponen state dari react untuk statefull component
        listArtikel: []    //variabel array yang digunakan untuk menyimpan data api
    }

componentDidMount() {        // komponen untuk mengecek ketika komponen telah di-amount-ing, maka panggilan
    fetch('https://jsonplaceholder.typicode.com/posts')  //alamat url api yang ingin kita ambil datanya
        .then(response => response.json())  //ubah respone data dari url api menjadi sebuah data json
        .then(jsonHasilAmbilDariAPI => {    //data json hasil ambil dari api kita masukkan ke dalam list artikel pada state
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
}

render() {
    return(
        <div className="post-arkikel">
            <h2>Daftar Artikel</h2>
            {
                this.state.listArtikel.map(artikel => {
                    return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
                })
            }
        </div>
    )
}
}

export default BlogPost;