<template>
    <DefaultLayout>
        <h1 class="mb-4 headingh1">Script &amp; Rough Cut Corner</h1>

        <p>Drim Short's <span class="accent">Script Corner</span> and <span class="accent">Rough Cut Corner</span>
            platforms were born as a result of our
            personal experience as filmmakers and screenwriters, and the journey our stories take from the
            initial idea for the script, to the final cut of the film. It is not always easy, and not everyone
            wants to participate in script development workshops and rough cut labs, and it is even more
            difficult to be part of the best workshops around Europe, but anyone who writes screenplays or
            is part of the editing process, is aware of the need for objective criticism, advice and suggestion
            from other screenwriters, script doctors and editing mentors, ie. fresh eyes who will see the
            project without being involved in it.
        </p>

        <p class="mb-5">
            <span class="accent">Script Corner</span> and <span class="accent">Rough Cut Corner</span> are platforms
            that in their team will include younger
            and more experienced screenwriters, directors and script mentors, who will guide you through
            the process of developing and writing your scripts, as well as through the process of creating
            dramaturgy in editing. Given the current situation and disability for normal physical
            communication, online consultations are one of the benefits of this time we are living, because
            from the comfort zone of our &quot;rooms where we work&quot; we will have the opportunity for
            professional support and maximum commitment of mentors in one-on-one sessions.
        </p>

        <div>
            <b-card-group deck>
                <b-card title="Script Corner" tag="article" align="center" class="mb-2 card1">
                    <b-card-text>
                        <p class="program_time">Short Script Consultations</p>

                        <p class="mb-1">Starting from single consulting session after reading your draft.</p>
                        <p class="mb-1">For every next session after rewriting you receive discount.</p>
                    </b-card-text>

                </b-card>


                <b-card title="Rough Cut Corner" tag="article" align="center" class="mb-2 card1">
                    <b-card-text>
                        <p class="program_time">Rough Cut Consultations</p>

                        <p class="mb-1">Starting from single consulting session after watching the rough cut of your
                            short film. For every next session after re-editing the rough cut you receive discount.</p>
                    </b-card-text>

                </b-card>


            </b-card-group>
        </div>


        <h4 class="header_divider accent_color mt-5 mb-2 text-center">Packages</h4>


        <div>
            <b-card-group deck>
                <b-card title="Two sessions or more with one mentor" tag="article" align="center"
                    class="mb-2 border-theme">
                    <b-card-text>

                    </b-card-text>

                </b-card>


                <b-card title="Two separate sessions with two different mentors" tag="article" align="center"
                    class="mb-2 border-theme">
                    <b-card-text>

                    </b-card-text>

                </b-card>


                <b-card title="One Script consultation and one Rough Cut consultation" tag="article" align="center"
                    class="mb-2 border-theme">
                    <b-card-text>

                    </b-card-text>

                </b-card>


            </b-card-group>
        </div>

        <p class="text-center mt-2">For more details on the working approach, as well as pricing information, please
            contact us via the <a href="#" @click="scrollTo('#contact_form_header', 800)" id="scroll_to_contact">contact
                form below.</a></p>


        <h4 class="header_divider accent_color mt-5 mb-2 text-center">Team</h4>

        <p>
            Members of our team are <span class="accent_color">Tamara Kotevska</span> (director), <span
                class="accent_color">Wim Vanacker</span> (screenwriter, script doctor) and <span
                class="accent_color">Jakov Poposki</span> (screenwriter). We hope that the team will soon expand with
            other
            professionals in the field of screenwriting and editing. All members of our team have had or are
            currently working on serious professional projects, collaborating with top professionals from
            the film industry in Europe in the process of writing or editing, and some of them already have
            serious experience as script doctors and script mentors. The team members know each other
            and have previously collaborated or helped each other with their projects, so each of them will
            approach your work in the same principle.
        </p>

        <div>
            <b-card-group deck>

                <b-card ref="modal" @click="$bvModal.show('modal-1')" return-focus="body" title="Jakov Poposki"
                    align="center" class="team_cards">
                    <g-image class="circle" src="~/assets/img/Jakov_Poposki.jpeg" width="160" height="160"
                        fit="contain" />
                    <b-card-text>

                    </b-card-text>

                </b-card>

                <b-card ref="modal" @click="$bvModal.show('modal-2')" return-focus="body" title="Tamara Kotevska"
                    align="center" class="team_cards">
                    <g-image class="circle" src="~/assets/img/Tamara_Kotevska.jpg" width="160" height="160"
                        fit="contain" />
                    <b-card-text>

                    </b-card-text>

                </b-card>

                <b-card ref="modal" @click="$bvModal.show('modal-3')" return-focus="body" title="Wim Vanacker"
                    align="center" class="team_cards">
                    <g-image class="circle" src="~/assets/img/Wim-Vanacker.jpg" width="160" height="160"
                        fit="contain" />
                    <b-card-text>

                    </b-card-text>

                </b-card>
            </b-card-group>


            <b-modal hide-footer centered v-once id="modal-1" size="lg" header-bg-variant="hf-purple"
                body-bg-variant="theme-purple" footer-bg-variant="mf-purple" title="Jakov Poposki">
                <b-container fluid>
                    <b-row>
                        <b-col>
                            <g-image class="modal-image" src="~/assets/img/Jakov_Poposki.jpeg" width="200" />
                            <p>
                                <span class="accent_color">Jakov Poposki</span> is born on 07.07.1988 in Struga where he
                                finishes his high school. In 2007 he
                                enrolled at Faculty of Electrical Engineering and Information Technologies in Skopje
                                where he
                                acquires his Bachelor of technology degree in Telecommunications. In 2015 he enrolled at
                                the
                                Film Institute Ohrid – Film Academy, where he finishes his master studies in
                                Screenwriting and
                                Dramaturgy. During his master studies he wrote six short screenplays, one feature
                                screenplay
                                and worked as a script consultant and assistant producer on several student films.
                            </p>
                            <p>
                                He wrote another three short screenplays and one feature screenplay.
                                He was cowriter of the middle
                                length documentary “The way of Clave”. He wrote the script for the promo videos for
                                Struga
                                Poetry Evenings 2019 and 2020, as well the script for the festival event. In 2017 he
                                participated
                                in KineNova Film Festival Script Development Workshop, where he won KINENOVA Script
                                Development Award for his script “Bridge”. His short script “Only Devil Hates Water” was
                                selected in the final selection of European Short Pitch 2019. He was part of LIM | Less
                                Is More
                                Pre-writing workshop 2019 in Bitola. Currently he is working on a feature screenplay
                                together
                                with Pierre Hodgson and Florian Hoffmeister.
                            </p>
                        </b-col>
                    </b-row>
                </b-container>
            </b-modal>


            <b-modal hide-footer centered id="modal-2" size="lg" header-bg-variant="hf-purple"
                body-bg-variant="theme-purple" footer-bg-variant="mf-purple" title="Tamara Kotevska">
                <b-container fluid>
                    <b-row>
                        <b-col>
                            <g-image class="modal-image" src="~/assets/img/Tamara_Kotevska.jpg" width="200" />
                            <p>
                                <span class="accent_color">Tamara Kotevska</span> is born in Prilep, 1993, Tamara
                                graduated film directing at the Faculty of
                                Dramatic Arts in Skopje. She has over 5 years of experience in documentary and fiction
                                film-
                                making as a freelance film director. She lives and works in Skopje.
                            </p>
                        </b-col>
                    </b-row>
                </b-container>


            </b-modal>


            <b-modal hide-footer centered id="modal-3" size="lg" header-bg-variant="hf-purple"
                body-bg-variant="theme-purple" footer-bg-variant="mf-purple" title="Wim Vanacker">
                <b-container fluid>
                    <b-row>
                        <b-col>
                            <g-image class="modal-image" src="~/assets/img/Wim-Vanacker.jpg" width="160" />
                            <p>
                                After studying psychology in Belgium, <span class="accent_color">Wim Vanacker</span>
                                moved to Dublin to work as a psychologist in the field of drug addiction. Three years
                                later, he picked up studying again at EICAR where he
                                made two shorts.
                            </p>
                            <p> After graduating, he discovered NISI MASA – European Network of Young
                                Cinema where he became the Head of the Script Department and the Project manager of the
                                MEDIA funded project, European Short Pitch.
                            </p>
                            <p> Furthermore, he’s a member of the Selection
                                Committee for the Official Short Film Competition of the Cannes Film Festival and he
                                works as
                                the Editorial Consultant for the First Cut Lab. On the side, he works as a script
                                consultant,
                                creative advisor, programmer, tutor and guest speaker for many workshops, film festivals
                                and
                                projects in development. As a writer/director, he’s currently developing the films
                                [ˈsɪə.ri.əl ] and
                                Psycho Revisited.
                            </p>
                        </b-col>
                    </b-row>
                </b-container>


            </b-modal>

        </div>


        <h4 id="contact_form_header" class="header_divider accent_color mt-5 mb-2 text-center">Contact</h4>
        <Contactform />

    </DefaultLayout>
</template>

<script>
import Contactform from "~/components/Contactform.vue";
//import VueScrollTo from 'vue-scrollto';

import DefaultLayout from '~/layouts/DefaultLayout.vue'
export default {
    components: {
        DefaultLayout,
        Contactform
    },
    metaInfo: {
        title: 'Script & Rough Cut Corner',
        htmlAttrs: {
            lang: 'en',
        },
    },
    data() {
        return {

            form: {
                name: "",
                message: "",
                inquiry_type: "",
                logrocket_usecases: [],
                terms: false,
                concepts: [],
                js_awesome: ""
            },
            options: {
                inquiry: [
                    { value: "feature", text: "Feature Request" },
                    { value: "bug", text: "Bug Report" },
                    { value: "support", text: "Support" }
                ]
            }
        }
    },
    methods: {
        animate(elem, style, unit, from, to, time, prop) {
            if (!elem) {
                return;
            }
            var start = new Date().getTime(),
                timer = setInterval(function () {
                    var step = Math.min(1, (new Date().getTime() - start) / time);
                    if (prop) {
                        elem[style] = (from + step * (to - from)) + unit;
                    } else {
                        elem.style[style] = (from + step * (to - from)) + unit;
                    }
                    if (step === 1) {
                        clearInterval(timer);
                    }
                }, 25);
            if (prop) {
                elem[style] = from + unit;
            } else {
                elem.style[style] = from + unit;
            }
        },

        jump(target, options) {


            var
                start = window.pageYOffset,
                opt = {
                    duration: options.duration,
                    offset: options.offset || 0,
                    callback: options.callback,
                    easing: options.easing || easeInOutQuad
                },
                distance = typeof target === 'string' ?
                    opt.offset + document.querySelector(target).getBoundingClientRect().top :
                    target,
                duration = typeof opt.duration === 'function' ?
                    opt.duration(distance) :
                    opt.duration,
                timeStart, timeElapsed;


            requestAnimationFrame(function (time) {
                timeStart = time;
                loop(time);
            });

            function loop(time) {
                timeElapsed = time - timeStart;

                window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

                if (timeElapsed < duration)
                    requestAnimationFrame(loop)
                else
                    end();
            }

            function end() {
                window.scrollTo(0, start + distance);

                if (typeof opt.callback === 'function')
                    opt.callback();
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2
                if (t < 1) return c / 2 * t * t + b
                t--
                return -c / 2 * (t * (t - 2) - 1) + b
            }

        },
        scrollTo(element, duration) {

            //document.getElementById(element).scrollIntoView(false, {behavior: "smooth"});
            //var target = document.getElementById(element)
            //this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 500, true);
            this.jump(element, {
                duration: duration || 400,
                callback: function () {
                    var el = document.querySelector('input')

                    el.focus()
                }
            });
        }
    }
}
</script>

<style>
.container {
    padding-bottom: 4rem;
}

.card {
    background-color: transparent;
}

.card.card1 {
    background-color: #19011445;
}

.border-theme {
    border: 1px solid #fff;
}

.program_p {
    font-weight: 800;
}

.card-title,
.accent,
.accent_color {
    color: #ffba3a;
}

.accent_color_2 {
    color: #fff;
}

.accent {
    font-weight: 600;
}

.program_time,
.team_cards h4.card-title {
    color: #fff;
    font-size: 1.3rem;
    line-height: 1.3;
    margin-bottom: 0.4rem;
    margin-top: 0.6rem;
    text-transform: uppercase;
}

.no_underline_hover:hover {
    text-decoration: none;
}

h4.accent_color {
    text-transform: uppercase;
}

h4.header_divider {
    font-size: 1.8rem;
}

.btn-link.accent_color_2 {
    text-transform: uppercase;
}

.btn-link.accent_color_2:hover {
    color: #fff;
    background-color: #19011445;
}

.team_cards .card-body {
    border: 1px solid rgba(0, 0, 0, 0.125);
    -webkit-transition: background 0.5s;
    /* For Safari 3.0 to 6.0 */
    transition: background 0.5s;
}

.team_cards .card-body:hover,
.team_cards .card-body:focus {
    border: 1px solid rgba(0, 0, 0, 0.225);
    background-color: #19011445;
    cursor: pointer;
}

img.circle {
    border-radius: 50% !important;
    border: 10px solid rgba(0, 0, 0, 0.225);
}

.bg-theme-purple,
.modal-content {
    background-color: #2b192c;
    border-color: #2b192c !important;
}

.modal-footer {
    padding: 0.2rem;
}

.bg-hf-purple {
    background-color: #190114;
    border-color: #2b192c !important;
}

.bg-mf-purple {
    background-color: transparent;
    border-color: #2b192c !important;
}

.modal-image {
    float: left;
    padding-right: 10px;
}

.close {
    color: #fff;
    text-shadow: none;
    opacity: 1;
}

.close:hover {
    color: #fff;
}
</style>
