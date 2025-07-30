class Testimonials extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });

		const testimonials = [
			{
				text: "The food here is fantastic! For appetizers, the Chicken Manchurian is my favorite—think of it as the Indian version of orange chicken. Each curry sauce has its own unique taste... The owner and chef were attentive. They chat with us and asked for our feedback. Very kind and humble people. This place is my new go-to in Johnston.",
				name: "Chen Jan",
				image: "assets/testimonial-1.png",
				rating: 5
			},
			{
				text: "Very good, very tasty. Stopped in here after traveling into town for business and left full and satisfied. Very friendly staff and talented chef.",
				name: "Steven Pingel",
				image: "assets/testimonial-2.png",
				rating: 5
			},
			{
				text: "This place has incredible flavor! We got the Gobi Manchurian for an appetizer and it was so crispy and crunchy with a delicious sauce. The cauliflower wasn't over cooked and mushy. It was the best I've ever had. I had the Goat Rogan Josh for my main dish and my Husband got the Lamb Tikka Masala. Both were incredibly flavorful.  The staff was so nice and attentive. I can't wait to go back!",
				name: "Julie Mullen",
				image: "assets/testimonial-3.png",
				rating: 5
			}
		];

		const container = document.createElement('section');
		container.classList.add('testimonial-container');

		//generate testimonial cards
		testimonials.forEach(({text, name, image, rating}) => {
			const card = document.createElement('div');
			card.classList.add('testimonial-card');
			const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
			card.innerHTML = `
				<blockquote>"${text}"</blockquote>
				<div class="stars">${stars}</div>
				<div class="customer-info">
					<img src="${image}" alt="${name}'s Photo" />
					<span>${name}</span>
				</div>
			`;
			container.appendChild(card);
		});

		//styles
		const style = document.createElement('style');
		style.textContent = `
	  .testimonial-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem 1rem;
        background: #fafafa;
      }

      .testimonial-card {
        width: 100%;
        max-width: 360px;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 1.5rem;
        background: white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      }

      blockquote {
        font-style: italic;
        margin: 0 0 1rem;
        padding-left: 1rem;
        border-left: 4px solid #f57c00;
        color: #333;
      }

      .stars {
        font-size: 1.1rem;
        color: #ffc107;
        margin-bottom: 0.75rem;
      }

      .customer-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: 0.5rem;
      }

      .customer-info img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #f57c00;
      }

      .customer-info span {
        font-weight: 600;
        color: #444;
      }

      @media (min-width: 1280px) {
        .testimonial-container {
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
		  align-items: stretch;
        }

        .testimonial-card {
          flex: 1 1 300px;
		  display: flex;
		  flex-direction: column;
        }
      }
		`;

		shadow.append(style, container);
	}
}

customElements.define('testimonials-section', Testimonials);