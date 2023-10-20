import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div>
            <div className="row tp">
                <div className="col-md-6">
                    <div className='pos1'>
                        <img src={person} className='img-fluid aimg1' />
                    </div>
                    <div className='pos2'>
                        <img src={parts} className='img-fluid aimg2' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='mar'>
                        <h4 className='ah4'>About Us</h4>
                        <h3 className='ah1'>We are qualified <br />& of experience <br />in this field</h3>
                        <p className='ap1'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='ap2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className='abs'>Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;