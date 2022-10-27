<template>
  <ActiveSection :sectionName="'contacts'">
    <div class="content contacts">
      <!-- title -->
      <div class="title">Get in Touch</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">         
          <div class="map" id="map">
            <iframe
            src="https://maps.google.com/maps?width=720&amp;height=100%25&amp;hl=en&amp;q=1792%20Pembina%20Highway+(The%20Onyx)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
             width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="info-list">
            <ul>
              <li><strong>Address:</strong> Adamar, Winnipeg</li>
              <li><strong>Email:</strong> contactmeenarani@mail.com</li>
              <li><strong>Phone:</strong> +431 866 5003</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="content contacts">
      <!-- title -->
      <div class="title">Contact Form</div>

      <!-- content -->
      <div class="row">
        <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div class="contact_form">
            <form id="cform" method="post">
              <div class="row">
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input type="text" name="name" placeholder="Full Name" />
                  </div>
                </div>
                <div class="col col-d-6 col-t-6 col-m-12">
                  <div class="group-val">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="col col-d-12 col-t-12 col-m-12">
                  <div class="group-val">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="align-left">
                <a
                  href="#"
                  class="button"
                  onclick="$('#cform').submit(); return false;"
                >
                  <span class="text">Send Message</span>
                  <span class="arrow"></span>
                </a>
              </div>
            </form>
            <div class="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div></div
  ></ActiveSection>
</template>

<script>
import ActiveSection from "./ActiveSection.vue";
export default {
  name: `Contact`,
  components: { ActiveSection },
};
</script>
