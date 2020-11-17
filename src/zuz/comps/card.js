import React from 'react';

function Card(props) {
    return (
        <div className="card rel flex col">
            <div className="media rel">
                <div className="play icon-play abs abc s40 cfff abcb" />
                <img src={"https://placeimg.com/500/500/people"} />
            </div>
            <div className="actions rel flex">
                <div className="col-a flex">
                    <button className="icon-heart3 s24" />
                    <button className="icon-bubble-text s24" />
                </div>
                <div className="col-b flex">
                    <button className="icon-ellipsis s24" />                    
                </div>
            </div>
            <div className="meta rel">
                <h2 className="s18 font">Teaching video</h2>
                <p className="s14 font txt">You wanna show it off? Advanced skills for skate boarding beginners!</p>
            </div>
            <div className="comments rel">
                <div className="cbox">
                    <input type="text" placeholder="Type your comment..." className="input s15 font" />
                </div>
            </div>
        </div>
    );
}

export default Card;