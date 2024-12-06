

const ConnectWithUs = () => {
    return (
        <div>
            <div className="collapse my-4 collapse-arrow bg-gray-100 text-gray-700">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">Our Story</div>
  <div className="collapse-content">
    <p>We are passionate gamers with a mission to provide honest reviews and insights on the best and latest games in the industry</p>
  </div>
</div>
<div className="collapse collapse-arrow my-4 bg-gray-100">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Our Approach</div>
  <div className="collapse-content">
    <p>We combine expert knowledge with community feedback to curate the best recommendations for every type of gamer</p>
  </div>
</div>
<div className="collapse collapse-arrow my-4 text-gray-700 bg-gray-100">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Meet the Team</div>
  <div className="collapse-content">
    <p>We’re a small but dedicated team of gamers, developers, and content creators working to make the gaming world better</p>
  </div>
</div>
<div className="collapse collapse-arrow my-4 text-gray-700 bg-gray-100">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Contact Us</div>
  <div className="collapse-content">
    <p>Have any questions or suggestions? We’d love to hear from you. Contact us at abc@website.com.</p>
  </div>
</div>
        </div>
    );
};

export default ConnectWithUs;