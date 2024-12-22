const Accordion = () => {
  return (
    <div className="flex flex-col gap-2 w-4/5 lg:w-2/3 mx-auto">
      {/* FAQ 1 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What types of books do you sell?
        </div>
        <div className="collapse-content">
          <p>We offer a wide range of books across various genres, including fiction, non-fiction, children's books, self-help, educational, fantasy, biographies, and more. We also carry e-books and audiobooks for digital readers.</p>
        </div>
      </div>
      
      {/* FAQ 2 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I purchase a book from your store?
        </div>
        <div className="collapse-content">
          <p>Simply browse through our collection of books, select your desired item, and click on the "Add to Cart" button. Once you've added all your items, proceed to the checkout page where you can review your order and select your preferred payment method.</p>
        </div>
      </div>
      
      {/* FAQ 3 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you offer free shipping?
        </div>
        <div className="collapse-content">
          <p>Yes! We offer free shipping on orders over a certain amount, depending on your location. You can check our shipping policy for more details about free shipping thresholds and delivery options.</p>
        </div>
      </div>
      
      {/* FAQ 4 */}
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I purchase a book as a gift?
        </div>
        <div className="collapse-content">
          <p>Absolutely! You can select the "Gift Option" during checkout to send your book as a gift. We also offer gift wrapping services for an additional fee. Include a personalized message, and we’ll take care of the rest.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
