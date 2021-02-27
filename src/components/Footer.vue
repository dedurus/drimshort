<template>
  <footer class="page-footer font-small teal">
    <div class="row" id="large_footer">
      <div class="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> drimshort@gmail.com</div>

      <div class="col">
        <div class="footer-copyright text-center">
          <span id="copyright">{{year}}</span> &copy; DSFF

        </div>
      </div>

      <div class="col text-right">
        <span class="footer_icons">
          <a href="https://www.facebook.com/DrimShort/" rel="noopener" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>

          <a href="https://www.instagram.com/DrimShort/" rel="noopener" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </span>
      </div>
    </div>


    <div class="row" id="small_footer">
      <div class="col">
        <span style="margin-right: 5px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail drim_email"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </span>
        <span class="drim_email">drimshort@gmail.com</span>
      </div>

      <div class="col">
        <div class="footer-copyright text-right ">
          <span style="line-height: 1rem;" id="copyright" class="drim_email">{{year}}</span> <span  style="line-height: 1rem;" class="drim_email"> &copy; DSFF</span>

        </div>
      </div>


    </div>
  </footer>
</template>


<script>
export default {
  data(){
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
footer.page-footer {
  width: 100%;
  font-size: 0.8rem;
  /* background-color: rgba(37, 21, 38, 0.6); */
  padding: 1.2rem 0.5rem 0.5rem 0.5rem;
  position: fixed;
  bottom: 0;
  color: #b275b5;
  background: -moz-linear-gradient(top,  rgba(43,25,44,0) 0%, rgba(43,25,44,1) 50%, rgba(43,25,44,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(43,25,44,0) 0%,rgba(43,25,44,1) 50%,rgba(43,25,44,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(43,25,44,0) 0%,rgba(43,25,44,1) 50%,rgba(43,25,44,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#992b192c', endColorstr='#2b192c',GradientType=0 ); /* IE6-9 */
}
.footer_icons{
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;
}
.footer_icons a:hover{
  color: #10daf7;
}
.footer_icons svg.feather-facebook{
  margin-right: 10px;
}
@media (max-width: 419px){
  #small_footer .drim_email{
    font-size: 12px;
  }
}
@media (max-width: 634px){
  /* footer{
    font-size: 12px;
  } */
  footer #large_footer{
    display: none;
  }
  footer #small_footer{
    display: flex;
  }
}
@media (min-width: 634px){
  /* footer{
    font-size: 12px;
  } */
  footer #large_footer{
    display: flex;
  }
  footer #small_footer{
    display: none;
  }
}
</style>
