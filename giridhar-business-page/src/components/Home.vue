<template>
    <div class="h-screen flex flex-col items-center justify-center" data-aos="fade-up" data-aos-duration="1000">
        <p class="uppercase text-5xl md:text-8xl font-sans tracking-tighter">
            Nirogi <span class="text-purple-400">Giridhar</span>
        </p>
        <p class="text-xl md:text-2xl mt-2 md:mt-4 font-poppins text-gray-300 font-thin">
            Professional Translator in Devanahalli
        </p>

        <div class="flex flex-row justify-center space-x-4">
            <button
                class="flex uppercase tracking-wide transition-all duration-300 justify-center items-center gap-x-2 mt-6 py-2 cursor-pointer text-customWhite bg-indigo-600 px-4 relative rounded-md border group"
                @click="scrollToContact">
                Contact
                <span class="origin-left block transform group-hover:scale-x-150 transition duration-300">&#8594;</span>
            </button>
            <button
                class="flex transition-all duration-300 justify-center items-center gap-x-2 mt-6 py-2 cursor-pointer text-customWhite hover:text-customBlack hover:bg-customGreen px-4 relative rounded-md border hover:border-customBlack group"
                @click="openWhatsApp">
                Chat on WhatsApp
            </button>
        </div>
    </div>

    <div class="font-poppins font-thin mx-8 mt-20" data-aos="fade-up" data-aos-duration="1000">
        <p class="uppercase text-4xl mb-8 text-rose-500">About</p>
        <div class="space-y-4">
            <p class="text-xl leading-relaxed">
                I’m Nirogi Giridhar, a dedicated translator based in Devanahalli, specializing in legal document
                translation. With over 2000 successful translations, I ensure precise and reliable interpretations
                between English and Kannada.
            </p>
            <p class="text-xl leading-relaxed">
                My commitment to quality and attention to detail means you can trust that your legal documents will be
                handled with the utmost professionalism and accuracy. Whether you need English to Kannada or Kannada to
                English translations, I am here to help you navigate the complexities of legal language.
            </p>
        </div>
    </div>

    <div class="font-poppins font-thin mx-8 mt-20" data-aos="fade-up" data-aos-duration="1000">
        <p class="uppercase text-4xl mb-8 text-lime-500">Services Offered</p>
        <div class="space-y-4">
            <p class="text-xl leading-relaxed">
                I provide translation services specifically for legal documents, covering various types, including but
                not limited to:
            </p>
            <ul class="list-disc pl-6 text-xl space-y-4">
                <li>Contracts and Agreements</li>
                <li>Affidavits and Certifications</li>
                <li>Legal Notices</li>
                <li>Official Court Documents</li>
            </ul>
            <p class="text-xl leading-relaxed">
                Each document is handled with strict confidentiality and attention to detail, ensuring that legal
                terminologies and nuances are translated accurately.
            </p>
        </div>
    </div>

    <div class="font-poppins font-thin mx-8 mt-20 pb-20" data-aos="fade-up" data-aos-duration="1000">
        <p class="uppercase text-4xl mb-8 text-cyan-500">How It Works?</p>
        <div class="space-y-6">
            <div class="space-y-4" data-aos="fade-up" data-aos-duration="1000">
                <p class="text-xl font-semibold">1. Submit Your Document</p>
                <p class="text-xl leading-relaxed">
                    You can send me a scanned copy of your document or discuss your requirements via email or phone.
                </p>
            </div>
            <div class="space-y-4" data-aos="fade-up" data-aos-duration="1000">
                <p class="text-xl font-semibold">2. Quotation</p>
                <p class="text-xl leading-relaxed">
                    A personalized quotation will be provided based on the specifics of your document. Pricing is
                    determined after reviewing the document’s length, complexity, and urgency.
                </p>
            </div>
            <div class="space-y-4" data-aos="fade-up" data-aos-duration="1000">
                <p class="text-xl font-semibold">3. Translation & Delivery</p>
                <p class="text-xl leading-relaxed">
                    Once agreed, the translation will be completed with care, adhering to any necessary deadlines and
                    delivered promptly.
                </p>
            </div>
        </div>
    </div>

    <footer id="contact" class="text-customWhite text-center py-20" data-aos="flip-up" data-aos-duration="1500">
        <p class="uppercase text-amber-400 text-4xl mb-4">Contact Me</p>
        <p class="text-xl mb-4">Feel free to reach out with any inquiries or to discuss your translation needs.</p>
        <p class="text-lg mb-2">Phone: <a href="tel:+919108182083" class="text-cyan-400">+91 9108182083</a></p>
        <p class="text-lg mb-4">Email: <a href="mailto:giridhartranslator@gmail.com"
                class="text-cyan-400">giridhartranslator@gmail.com</a></p>
        <p class="mt-8 text-lg underline">Nirogi Giridhar</p>
        <p class="text-lg">Legal Document Translator - Kannada to English & English to Kannada</p>
        <p class="text-lg">(Pricing upon review of document requirements)</p>
    </footer>
</template>

<script>
export default {
    methods: {
        openWhatsApp() {
            const message = "Hello! I would like to inquire about your translation services.";
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/+919108182083?text=${encodedMessage}`, '_blank');
        },
        scrollToContact() {
            const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        },
    }
}
</script>
