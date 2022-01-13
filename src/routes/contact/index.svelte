<div class="flex flex-col mb-10 tracking-widest font-black">
  <h1 class="text-4xl text-center mb-3">
    <span class="text-primary">&lt;</span> Contact Us
    <span class="text-primary">/&gt;</span>
  </h1>
  <h2 class="text-center">
    Need to contact us? Fill out the form below.
  </h2>
</div>

<div class="form-control">
  <label class="label" for="name">
    <span class="label-text">Your Name</span>
  </label>
  <input
    id="name"
    type="text"
    placeholder="John Doe"
    class="input input-bordered"
  />
  <label class="label" for="email">
    <span class="label-text">Your Email</span>
  </label>
  <input
    id="email"
    type="email"
    placeholder="john@doe.com"
    class="input input-bordered"
  />
  <label class="label" for="select">
    <span class="label-text">What's this about?</span>
  </label>
  <select class="select select-bordered w-full" id="select">
    <option disabled="disabled" selected="selected"
      >Select one...</option
    >
    <option>General Contact & Feedback</option>
    <option>Guest Writing</option>
    <option>Advertise With Us</option>
    <option>Be a Podcast Guest</option>
  </select>
  <label class="label" for="text">
    <span class="label-text">Fill in your message below</span>
  </label>
  <textarea
    id="text"
    class="textarea h-24 textarea-bordered"
    placeholder="Type your message here..."
  />
  <input
    type="submit"
    placeholder="Select one..."
    class="input input-bordered mt-10 cursor-pointer"
  />
</div>
