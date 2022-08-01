<template>
    <footer class="page-footer font-small teal">
        <div class="row" id="large_footer">
            <div class="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg> drimshort@gmail.com</div>

            <div class="col">
                <div class="footer-copyright text-center">
                    <span class="footer_icons">
                        <a href="https://www.facebook.com/DrimShort/" rel="noopener" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-facebook">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/DrimShort/" rel="noopener" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-instagram">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </span>

                </div>
            </div>

            <div class="col text-right">
                <a href="https://filmfreeway.com/festivals/64112?utm_campaign=Drim+Short+Film+Festival&amp;utm_medium=External&amp;utm_source=Submission+Button"
                    target="_blank" title="Click to submit on FilmFreeway">
                    <g-image src="~/assets/img/filmfreeway_150.png" title="Click to submit on FilmFreeway" width="150"
                        height="28"></g-image>
                </a>
            </div>
        </div>


        <div class="row" id="small_footer">
            <div class="col">
                <span style="margin-right: 5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-mail drim_email">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </span>
                <span class="drim_email">drimshort@gmail.com</span>
            </div>

            <div class="col text-right">
                <a href="https://filmfreeway.com/festivals/64112?utm_campaign=Drim+Short+Film+Festival&amp;utm_medium=External&amp;utm_source=Submission+Button"
                    target="_blank" title="Click to submit on FilmFreeway">
                    <g-image src="~/assets/img/filmfreeway_150.png" title="Click to submit on FilmFreeway" width="150"
                        height="28"></g-image>
                </a>

            </div>


        </div>
    </footer>
</template>


<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
