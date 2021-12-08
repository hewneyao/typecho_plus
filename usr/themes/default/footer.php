<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>



<footer id="footer" role="contentinfo">
    &copy; <?php echo date('Y'); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title(); ?></a>.
    <?php _e('由 <a href="http://www.typecho.org">Typecho</a> 强力驱动'); ?>.
    <a href="http://www.beian.gov.cn/portal/recordQuery" target="_blank">冀ICP备2021021961号</a>
</footer><!-- end #footer -->
<?php $this->footer(); ?>
</body>
</html>
