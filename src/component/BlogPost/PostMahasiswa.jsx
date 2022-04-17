import React from "react";

const PostMahasiswa = (props) => {
    return(
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Mahasiswa" />
                </div> 
            <div className="konten-mahasiswa">
                <div >{props.nim}</div>
                <p>{props.nama}</p>
                <p>{props.alamat}</p>
                <p>{props.hp}</p>
                <p>{props.angkatan}</p>
                <p>{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}
export default PostMahasiswa;