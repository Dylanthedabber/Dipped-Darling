// ============================================================
// GALLERY IMAGES — just add new entries here to add photos!
// To add a new image:
//   1. Drop your .webp file in the images/ folder
//   2. Name it starting with "gallery-" (e.g. gallery-my-new-treat.webp)
//   3. Add a new line below with the filename, title, description, and section
// Sections: 'strawberries' | 'valentines' | 'treat-boxes' | 'holiday' | 'pretzels-oreos'
// ============================================================
var galleryImages = [
  // === Featured 6 (shown on homepage) — one per category ===
  { src: 'images/gallery-blue-marble-strawberries.webp', title: 'Blue Marble Strawberries', desc: 'Stunning blue marble hand dipped strawberries', section: 'strawberries' },
  { src: 'images/gallery-valentines-love-marble-strawberries.webp', title: "Valentine's Love Marble Strawberries", desc: 'Pink marble strawberries with love-themed decorations', section: 'valentines' },
  { src: 'images/gallery-pink-gold-party-box.webp', title: 'Pink & Gold Party Box', desc: 'Pink and gold birthday party treat box with cakesicles and oreos', section: 'treat-boxes' },
  { src: 'images/gallery-stitch-strawberries.webp', title: 'Stitch Strawberries', desc: 'Lilo & Stitch themed hand dipped strawberries', section: 'strawberries' },
  { src: 'images/gallery-christmas-treat-box.webp', title: 'Christmas Treat Box', desc: 'Christmas treat box with trees, mittens, gingerbread, and Santa suits', section: 'holiday' },
  { src: 'images/gallery-pink-gold-cakesicles.webp', title: 'Pink & Gold Cakesicles', desc: 'Pink and gold cakesicles with pretzel rods', section: 'pretzels-oreos' },

  // Strawberries
  { src: 'images/gallery-pink-chocolate-strawberries.webp', title: 'Pink Chocolate Strawberries', desc: 'Beautiful pink hand dipped strawberries with gold shimmer', section: 'strawberries' },
  { src: 'images/gallery-classic-dipped-strawberries.webp', title: 'Classic Dipped Strawberries', desc: 'Classic hand dipped and white hand dipped strawberries', section: 'strawberries' },
  { src: 'images/gallery-pink-chocolate-drizzle-strawberries.webp', title: 'Pink Chocolate Drizzle Strawberries', desc: 'Pink hand dipped strawberries with drizzle accents', section: 'strawberries' },
  { src: 'images/gallery-classic-chocolate-strawberries.webp', title: 'Classic Chocolate Strawberries', desc: 'Timeless hand dipped and white hand dipped strawberries', section: 'strawberries' },
  { src: 'images/gallery-pink-chocolate-mixed-strawberries.webp', title: 'Pink Chocolate Mixed Strawberries', desc: 'Assorted pink and hand dipped strawberries', section: 'strawberries' },
  { src: 'images/gallery-white-pink-rose-strawberries.webp', title: 'White & Pink Rose Strawberries', desc: 'Delicate white and pink rose-themed hand dipped strawberries', section: 'strawberries' },
  { src: 'images/gallery-simple-pink-strawberries.webp', title: 'Simple Pink Strawberries', desc: 'Elegant light pink hand dipped strawberries', section: 'strawberries' },
  { src: 'images/gallery-pink-shimmer-gold-strawberries.webp', title: 'Pink Shimmer & Gold Strawberries', desc: 'Pink shimmer strawberries with gold fleck accents', section: 'strawberries' },
  { src: 'images/gallery-white-gold-bow-strawberries.webp', title: 'White & Gold Bow Strawberries', desc: 'White hand dipped strawberries with gold bow decorations', section: 'strawberries' },
  { src: 'images/gallery-chocolate-white-drizzle-strawberries.webp', title: 'Chocolate & White Drizzle', desc: 'Rich hand dipped strawberries with white hand dipped drizzle', section: 'strawberries' },
  { src: 'images/gallery-purple-peach-birthday-strawberries.webp', title: 'Purple & Peach Birthday Strawberries', desc: 'Purple and peach birthday strawberries with number toppers', section: 'strawberries' },
  { src: 'images/gallery-dia-de-muertos-strawberries.webp', title: 'Dia de Muertos Strawberries', desc: 'Sugar skull themed strawberries for Day of the Dead celebrations', section: 'strawberries' },
  { src: 'images/gallery-easter-chick-strawberries.webp', title: 'Easter Chick Strawberries', desc: 'Adorable Easter chick-themed hand dipped strawberries', section: 'strawberries' },

  // Valentine's
  { src: 'images/gallery-valentines-strawberries.webp', title: "Valentine's Strawberries", desc: 'Hand dipped and pink strawberries beautifully decorated with hearts', section: 'valentines' },
  { src: 'images/gallery-valentines-heart-chocolate-strawberries.webp', title: "Valentine's Heart Strawberries", desc: 'Heart-decorated hand dipped strawberries for Valentine\'s Day', section: 'valentines' },
  { src: 'images/gallery-valentines-red-pink-strawberries.webp', title: "Valentine's Red & Pink Strawberries", desc: 'Red and pink hand dipped strawberries with Valentine\'s decorations', section: 'valentines' },
  { src: 'images/gallery-valentines-red-pink-swirl-strawberries.webp', title: "Valentine's Swirl Strawberries", desc: 'Red and pink swirl-decorated Valentine\'s strawberries', section: 'valentines' },
  { src: 'images/gallery-valentines-red-white-heart-strawberries.webp', title: "Valentine's Red & White Hearts", desc: 'Red and white heart-decorated Valentine\'s strawberries', section: 'valentines' },
  { src: 'images/gallery-valentines-heart-strawberries.webp', title: "Valentine's Heart Collection", desc: 'Assorted heart-themed Valentine\'s strawberries', section: 'valentines' },
  { src: 'images/gallery-valentines-mixed-strawberries.webp', title: "Valentine's Mixed Strawberries", desc: 'Assorted Valentine\'s strawberries with bow accents', section: 'valentines' },
  { src: 'images/gallery-valentines-cakesicles.webp', title: "Valentine's Cakesicles", desc: 'XOXO and heart-themed cakesicles for Valentine\'s Day', section: 'valentines' },
  { src: 'images/gallery-valentines-cakesicles-tictactoe.webp', title: "Valentine's Tic-Tac-Toe Cakesicles", desc: 'Valentine\'s cakesicles with tic-tac-toe heart designs', section: 'valentines' },
  { src: 'images/gallery-valentines-spiderman-cakesicles.webp', title: "Valentine's Spiderman Cakesicles", desc: 'Pink Spiderman-themed Valentine\'s cakesicles with web hearts', section: 'valentines' },
  { src: 'images/gallery-valentines-heart-tin-pretzels.webp', title: "Valentine's Heart Tin with Pretzels", desc: 'Pink strawberries and hand dipped pretzels in a heart tin', section: 'valentines' },
  { src: 'images/gallery-valentines-heart-tin-ribbon.webp', title: "Valentine's Heart Tin Gift", desc: 'Red-striped strawberries in a heart tin with Valentine\'s ribbon', section: 'valentines' },
  { src: 'images/gallery-pokemon-valentines-box.webp', title: "Pokemon Valentine's Box", desc: 'Pokeball strawberries with "I Choose You" Valentine\'s theme', section: 'valentines' },

  // Treat Boxes & Party Boxes
  { src: 'images/gallery-themed-treat-box.webp', title: 'Themed Treat Boxes', desc: 'Themed strawberry boxes with cakesicles for any fandom or occasion', section: 'treat-boxes' },
  { src: 'images/gallery-pink-gold-birthday-treat-box.webp', title: 'Pink & Gold Birthday Treat Box', desc: 'Birthday treat box with cakesicles, cake pops, and oreos', section: 'treat-boxes' },
  { src: 'images/gallery-pink-rose-treat-box.webp', title: 'Pink Rose Treat Box', desc: 'Rose-themed treat box with rice krispies, cakesicles, and pretzels', section: 'treat-boxes' },
  { src: 'images/gallery-stitch-treat-box.webp', title: 'Stitch Treat Box', desc: 'Lilo & Stitch themed treat box in pink and blue', section: 'treat-boxes' },
  { src: 'images/gallery-sweet-16-leopard-treat-box.webp', title: 'Sweet 16 Leopard Treat Box', desc: 'Leopard print Sweet 16 party treat box', section: 'treat-boxes' },
  { src: 'images/gallery-fall-treat-box.webp', title: 'Fall Treat Box', desc: 'Autumn treat box with pumpkin cake pops, daisies, and pretzel rods', section: 'treat-boxes' },
  { src: 'images/gallery-pastel-rainbow-treat-box.webp', title: 'Pastel Rainbow Treat Box', desc: 'Personalized pastel rainbow treat box with cakesicles and oreos', section: 'treat-boxes' },
  { src: 'images/gallery-racing-theme-treat-box.webp', title: 'Racing Theme Treat Box', desc: 'Checkered flag racing themed treat box with number toppers', section: 'treat-boxes' },
  { src: 'images/gallery-cars-theme-treat-box.webp', title: 'Cars Theme Treat Box', desc: 'Lightning McQueen Cars themed treat box', section: 'treat-boxes' },
  { src: 'images/gallery-winter-onederland-treat-box.webp', title: 'Winter ONEderland Treat Box', desc: 'Blue snowflake Winter ONEderland first birthday treat box', section: 'treat-boxes' },

  // Holiday & Seasonal
  { src: 'images/gallery-christmas-nutcracker-treat-box.webp', title: 'Christmas Nutcracker Treat Box', desc: 'Nutcracker themed Christmas treat box with snowflakes and Santa strawberries', section: 'holiday' },
  { src: 'images/gallery-christmas-joy-treats-closeup.webp', title: 'Christmas JOY Treats', desc: 'Christmas JOY themed treat sampler close-up', section: 'holiday' },
  { src: 'images/gallery-winter-snowflake-strawberries.webp', title: 'Winter Snowflake Strawberries', desc: 'Blue and white snowflake decorated strawberries', section: 'holiday' },
  { src: 'images/gallery-halloween-hot-cocoa-bombs.webp', title: 'Halloween Hot Cocoa Bombs', desc: 'Pink Halloween hot cocoa bombs with pumpkin, BOO, mummy, and spider designs', section: 'holiday' },

  // Pretzels, Oreos & Other Treats
  { src: 'images/gallery-pink-gold-pretzel-rods.webp', title: 'Pink & Gold Pretzel Rods', desc: 'Pink and gold hand dipped pretzel rods with bow accents', section: 'pretzels-oreos' },
  { src: 'images/gallery-chocolate-drizzle-pretzels.webp', title: 'Chocolate Drizzle Pretzels', desc: 'Classic hand dipped drizzle pretzel rods', section: 'pretzels-oreos' },
  { src: 'images/gallery-sweet-16-leopard-oreos.webp', title: 'Sweet 16 Leopard Oreos', desc: 'Leopard print Sweet 16 hand dipped oreos', section: 'pretzels-oreos' },
  { src: 'images/gallery-pink-zebra-oreos.webp', title: 'Pink Zebra Oreos', desc: 'Pink zebra print hand dipped oreos with pretzel rods', section: 'pretzels-oreos' },
  { src: 'images/gallery-pastel-rainbow-cakesicles.webp', title: 'Pastel Rainbow Cakesicles', desc: 'Pastel rainbow cakesicles and oreos with gold frame accents', section: 'pretzels-oreos' },
  { src: 'images/gallery-stitch-pretzel-rods.webp', title: 'Stitch Pretzel Rods', desc: 'Lilo & Stitch themed hand dipped pretzel rods', section: 'pretzels-oreos' },
  { src: 'images/gallery-purple-peach-birthday-pretzels.webp', title: 'Purple & Peach Birthday Pretzels', desc: 'Purple and peach birthday pretzel rods with number toppers', section: 'pretzels-oreos' },
];

// ============================================================
// GALLERY UI — only runs when galleryGrid element is present (index.html)
// ============================================================
if (document.getElementById('galleryGrid')) {

var galleryGrid = document.getElementById('galleryGrid');

// Render the first 6 images as a static grid
galleryImages.slice(0, 6).forEach(function(item, i) {
  var card = document.createElement('div');
  card.className = 'treat-card';

  var imgEl = document.createElement('img');
  imgEl.src = item.src;
  imgEl.alt = item.title;
  imgEl.loading = 'lazy';

  var wrapper = document.createElement('div');
  wrapper.className = 'img-wrapper';
  wrapper.appendChild(imgEl);

  var overlay = document.createElement('div');
  overlay.className = 'card-overlay';
  overlay.innerHTML = '<h3>' + item.title + '</h3><p>' + item.desc + '</p>';

  card.appendChild(wrapper);
  card.appendChild(overlay);
  card.dataset.index = i;
  card.addEventListener('click', function() {
    openLightbox(parseInt(this.dataset.index));
  });
  galleryGrid.appendChild(card);
});

requestAnimationFrame(function() {
  galleryGrid.classList.add('loaded');
});

} // end galleryGrid guard
