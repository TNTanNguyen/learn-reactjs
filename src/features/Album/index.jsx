import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../Album/components/AlbumList'
AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Trữ Tình & Bolero",
            thumbnailUrl: "https://photo-zmp3.zadn.vn/cover/d/0/4/4/d0444267f5150cac95ee512d2149101c.jpg"
        },
        {
            id: 2,
            name: "EDM",
            thumbnailUrl: "https://photo-zmp3.zadn.vn/cover/9/d/0/a/9d0ac957b959ec3e6a0e60a6ff061e10.jpg"
        },
        {
            id: 3,
            name: "Remix",
            thumbnailUrl: "https://photo-zmp3.zadn.vn/cover/4/2/8/4/428431a34d60865f3e7b60b005cb8b57.jpg"
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;