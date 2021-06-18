import React from 'react';

function MusicTable(props){
    const songRows = props.music.map((song)=>
        <tr>
            <td>{song.id}</td>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <button onClick={()=>props.delete(song.id)}>Delete</button>
        </tr>
    );
    return(
        <div>
            <input type="text" id="myInput" placeholder="Search for..."/>
            <table id="myTable">
                <thead>
                    <tr>Songs</tr>
                    <tr class="header">
                        <th style={{width:"10%"}}>I.D. #</th>
                        <th style={{width:"25%"}}>Title</th>
                        <th style={{width:"25%"}}>Artist</th>
                        <th style={{width:"25%"}}>Album</th>
                        <th style={{width:"15%"}}>Release Date</th>
                    </tr>
                </thead>
                <tbody>{songRows}</tbody>
            </table>
        </div>
    )
}

export default MusicTable;