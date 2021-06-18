import React from 'react';

function MusicTable(props){
    const songRows = props.music.map((song)=>
    <tr>
        <td>{song.id}</td>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.release_date}</td>
    </tr>
    );
    return(
        <div>
            <table>
                <thead>
                    <tr>Songs</tr>
                    <tr>
                        <th>I.D. #</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                {songRows}
            </table>
        </div>
    )
}

export default MusicTable;