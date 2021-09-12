import { React } from 'react';
import './about.scss';

export const About = () => {
    return (
<div className="about">
    <div className="about-content">
        <h2>About us</h2>
        <p>
        Adipisicing minim minim in cupidatat est culpa. Laboris reprehenderit ut quis laborum minim dolor aliqua nostrud. Magna ex nulla deserunt duis ut cillum est nulla aliquip sit.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, distinctio quisquam laudantium sed provident animi, repellat nihil corporis dicta ducimus sunt reprehenderit dolorum voluptas reiciendis unde inventore modi, et asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div className="img-wrapper">
    <img src={`${process.env.PUBLIC_URL}/assets/images/about.jpg`} alt="man in rain"></img>
    </div>
</div>
    )
}