$(window).on("load", function () {
	"use strict";
	if ($.fn.exists = function () {
			return 0 < this.length
		}, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 769) var i = !0;
	else i = !1;
	var e = !!window.opr && !!opr.addons || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"),
		a = "undefined" != typeof InstallTrigger,
		o = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString(),
		t = !!document.documentMode,
		n = (!t && window.StyleMedia, /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)),
		s = (n || e) && !!window.CSS,
		d = e || a || s || n;
	if (t && $("body").addClass("ie-browser"), !0 === i) {
		if ($(".bg-parallax").addClass("bg-parallax-mobiled"), $("#side-dotted-navigation").exists()) {
			var l = $("#side-dotted-navigation");
			$("body section:not(.nav-menu), div").on("touch touchstart", function () {
				$(l).addClass("spy")
			}), $(l).on("touch touchstart touchend", function () {
				$(l).removeClass("spy")
			}), $('#side-dotted-navigation:not(".spy")').on("touch", function () {
				$(l).addClass("spy")
			})
		}
		$(".hero-slider").height($(window).outerHeight())
	} else {
		var r = skrollr.init({
			forceHeight: !1,
			smoothScrolling: !1
		});
		$("body").addClass("stable"), $(window).on("scroll", function () {
			$("body").hasClass("stable") && (setTimeout(function () {
				d && r.refresh()
			}, 100), $(window).trigger("resize"), $("body").removeClass("stable"))
		}), $("#extranav").ready(function () {
			$(window).on("scroll", function () {
				! function () {
					var e = $(window).scrollTop(),
						t = $("#extranav"),
						i = t.attr("data-showme"),
						a = t.attr("data-hideme");
					if ($(a).exists() && $(i).exists()) {
						var o = $(i).offset().top,
							n = $(a).offset().top;
						700 < $(window).width() && (o - 60 <= e && e <= n - 60 ? $(t).slideDown(150).removeClass("hiding") : $(t).addClass("hiding").slideUp(150))
					} else $(t).slideDown(150).removeClass("hiding").find("ul.nav").html("Extra Navigation is here! Please check the data-showme and data-hideme areas. This page does not have those links.")
				}()
			})
		})
	}(window.matchMedia && (window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches) || window.devicePixelRatio && 1.3 < window.devicePixelRatio) && ($("body").addClass("retina-device"), $("[data-retina-image]").each(function () {
		$(this);
		var e = $(this).width(),
			t = $(this).attr("data-retina-image");
		$(this).attr("src", t).css({
			width: e + "px"
		})
	})), $(".retina-logo").exists() && $("body").addClass("has-retina-logo"), $.fn.getDeviceWidth = function () {
		1200 < $(window).width() && $("body").not(".device-xl").removeClass("device-lg device-md device-sm device-xs device-xxs").addClass("device-xl"), 992 < $(window).width() && $(window).width() < 1200 && $("body").not(".device-lg").removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass("device-lg"), 768 < $(window).width() && $(window).width() < 992 && $("body").not(".device-md").removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass("device-md"), 576 < $(window).width() && $(window).width() < 768 && $("body").not(".device-sm").removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass("device-sm"), 480 < $(window).width() && $(window).width() < 576 && $("body").not(".device-xs").removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass("device-xs"), $(window).width() < 480 && $("body").not(".device-xxs").removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass("device-xxs")
	}, $("body").getDeviceWidth(), $(window).width() < 769 && $("[data-mobile-background]").each(function () {
		var e = $(this).data("mobile-background");
		$(this).addClass("bg-mobiled").css({
			"background-image": "url(" + e + ")",
			"background-size": "cover !important"
		})
	}), $("[data-original]").exists() && $("[data-original]").lazyload({
		threshold: 1e3
	}), $(".video-trigger").exists() && $(".video-trigger").each(function () {
		var t = $(this).find("iframe"),
			e = $(this).find(".video-play-trigger"),
			i = $(t).data("src");
		$(e).on("click", function (e) {
			$(t).attr("src", i), e.preventDefault(), $(this).delay(200).fadeOut(500)
		})
	}), $(".qdr-alert-trigger").each(function () {
		var e, t = $(this),
			i = $(t).data("target");
		$(t).on("click", function () {
			clearTimeout(e), $(i).fadeOut(0).stop().clearQueue(), setTimeout(function () {
				$(i).fadeIn(300)
			}, 1), e = setTimeout(function () {
				$(i).fadeOut(300)
			}, 3e3)
		})
	}), $(".stay").on("click", function (e) {
		e.preventDefault()
	});
	var c = $.cookie($(".modal-check").attr("name")),
		h = $("#cookie-modal");
	if (c && "true" == c ? $(this).prop("checked", c) : $(h).modal("show"), $(".modal-check").change(function () {
			$.cookie($(this).attr("name"), $(this).prop("checked"), {
				path: "/",
				expires: 1
			})
		}), (null == $.cookie("no_thanks") && $("#cookie-alert").exists() || $("#cookie-modal").exists()) && ($.fn.show_modal = function () {
			$("#cookie-alert").modal({
				backdrop: "static",
				keyboard: !1
			}), $(".modal-backdrop.show:not(.fade)").removeClass("modal-backdrop"), $("body").addClass("cookie-alert-active")
		}, setTimeout(function () {
			$(window).show_modal()
		}, 3e3)), $.fn.closeCookieAlert = function () {
			$.cookie("no_thanks", "true", {
				expires: 1,
				path: "/"
			}), $("body").removeClass("cookie-alert-active"), $("#cookie-alert").hide()
		}, $("#cookie-alert .close").on("click", function () {
			$("body").closeCookieAlert()
		}), $(document).keyup(function (e) {
			27 == e.keyCode && $("body").closeCookieAlert()
		}), $(".qdr-hover").each(function () {
			var e = $(this).html();
			$(this).empty(), $(this).append("<span class='qdr-details'></span>"), $(this).find("span.qdr-details").html(e)
		}), $(".qdr-hover-3").each(function () {
			var e = $(this).html();
			$(this).empty(), $(this).append("<span class='qdr-details'></span>"), $(this).find("span.qdr-details").html(e)
		}), $(".boxes").addClass("clearfix"), $('[class*="qdr-col-"]').addClass("clearfix"), $("[data-color]").each(function () {
			var e = $(this).data("color");
			$(this).css({
				color: e
			})
		}), $("[data-bgcolor]").not(".tp-bgimg").not(".rev-slidebg").each(function () {
			var e = $(this).data("bgcolor");
			$(this).css({
				"background-color": e
			})
		}), $(".moving-container").exists() && (-1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") || $(".moving-container").each(function () {
			var e = $(this).find(".moving");
			$(this).hover3d({
				selector: e,
				shine: !1,
				perspective: 1500,
				sensitivity: 85,
				invert: !1
			})
		})), $(".styled-portfolio.parallax").exists() && 630 < $(window).width() && $(".styled-portfolio.parallax .cbp-item").each(function (e, t) {
			$(this).on("mouseenter", function (e) {
				var t = "",
					i = "",
					a = $(this);
				$(a).mousemove(function (e) {
					"" == t && (t = e.pageX);
					var s = e.pageX - t;
					t = e.pageX, "" == i && (i = e.pageY);
					var d = e.pageY - i;
					i = e.pageY, $(a).find(".cbp-caption-defaultWrap").each(function (e, t) {
						var i = (e + 1) * (.1 * s),
							a = (e + 1) * (.1 * d),
							o = $(t).position().left + i,
							n = $(t).position().top + a;
						$(t).find("img").css({
							"-webkit-transform": "translate(" + o + "px," + n + "px) scale(1.06)"
						})
					})
				})
			}), $(this).on("mouseleave", function (e) {
				$(this).find("img").css({
					"-webkit-transform": "translate(0px,0px) scale(1.0)"
				})
			})
		}), $(".fitvids").exists() && $(".fitvids").fitVids(), $("[data-property]").exists() && $(".player").YTPlayer(), $(".timeline-container").exists() && $(".timeline-container").each(function () {
			var i = $(this);
			$(this).find(".dates div").each(function () {
				var e = $(this).data("event-id"),
					t = $(i).data("active-date");
				$(i).find("#" + t).addClass("active"), $(i).find('[data-event-id="' + t + '"]').addClass("active"), $(this).mouseenter(function () {
					$(i).find("#" + t).removeClass("active"), $(i).find("#" + e).addClass("active"), $(i).find('[data-event-id="' + t + '"]').removeClass("active")
				}), $(this).mouseleave(function () {
					$(i).find("#" + t).addClass("active"), $(i).find('[data-event-id="' + t + '"]').addClass("active"), $(i).find("#" + e).removeClass("active"), $(i).find("#" + t).addClass("active")
				})
			})
		}), $(".progress-bar").exists() && $(".progress-bar").each(function () {
			var t = $(this);
			$(t).waypoint(function () {
				var e = $(t).attr("data-value");
				$(t).animate({
					width: e + "%"
				}, 300), this.destroy()
			}, {
				offset: "100%"
			})
		}), $.fn.verticalPosition = function () {
			$(".vertical-center").each(function () {
				var e = $(this).height();
				$(this).css({
					"margin-top": -e / 2
				})
			})
		}, $("body").verticalPosition(), $('[data-toggle="tooltip"], .tooltip-item').each(function () {
			var e = $(this),
				t = $(e).parent();
			$(e).tooltip({
				html: !0,
				container: t
			})
		}), $(".active-me-with-click").each(function () {
			var t = $(this);
			$(window).on("click touchstart touch", function (e) {
				$(t).removeClass("active")
			}), $(t).on("click touch", function () {
				return $(t).toggleClass("active"), !1
			})
		}), $('[data-toggle="popover"]').each(function () {
			var e = $(this),
				t = $(e).parent();
			$(e).popover({
				html: !0,
				container: t
			})
		}), $("[data-infocard]").each(function () {
			var e, t = $(this),
				i = $(this).data("infocard");
			$(t).on("mouseenter", function () {
				$(i).addClass("active"), clearTimeout(e), $(".icon-navigation").addClass("passive")
			}), $(i).on("mouseenter", function () {
				$(i).addClass("active"), clearTimeout(e), $(".icon-navigation").addClass("passive")
			}), $(t).on("mouseleave", function () {
				e = setTimeout(function () {
					$(i).removeClass("active"), $(".icon-navigation").removeClass("passive")
				}, 250)
			}), $(i).on("mouseleave", function () {
				e = setTimeout(function () {
					$(i).removeClass("active"), $(".icon-navigation").removeClass("passive")
				}, 250)
			})
		}), $("[data-gradient-bg]").each(function () {
			var e = $(this).data("gradient-bg"),
				t = $(this).data("gradient-size");
			$(this).css({
				background: "linear-gradient(90deg," + e + ")",
				"background-size": t + "%" + t + "%"
			})
		}), $("#quadra_fixed_modal").exists() && ($.fn.qfmScript = function () {
			$("#quadra_fixed_modal:not(.hiding)").each(function () {
				var s = $(this),
					t = $(this).find(".quadra_fixed_modal_top"),
					i = $(this).find("#qfm_title"),
					a = $(this).find("#qfm_button");
				$(".quadra_fixed_modal_top, .qfm-trigger").on("click", function () {
					return s.toggleClass("active force-show"), $("body").toggleClass("qdr-modal-open"), t.delay(400).toggleClass("open_modal"), i.delay(100).fadeToggle(900), a.delay(100).fadeToggle(900), s.animate({
						scrollTop: 0
					}, "fast"), !1
				}), $(document).keyup(function (e) {
					27 == e.keyCode && (s.removeClass("active force-show"), $("body").removeClass("qdr-modal-open"), t.delay(400).removeClass("open_modal"), i.delay(100).fadeOut(900), a.delay(100).fadeIn(900), s.animate({
						scrollTop: 0
					}, "fast"))
				}), window.onscroll = function () {
					if (s.data("showme") && s.data("hideme")) {
						var e = s.data("showme"),
							t = s.data("hideme"),
							i = $(window).outerHeight(),
							a = $(e).offset().top,
							o = $(t).offset().top,
							n = $(this).scrollTop();
						a - i <= n && n <= o - i ? (s.addClass("clickable"), $(".drop-msg, #back-to-top").addClass("qfm-time")) : (s.removeClass("clickable"), $(".drop-msg, #back-to-top").removeClass("qfm-time"))
					}
				}
			})
		}, $(window).qfmScript()), $("#qfm_button span.hide-modal").on("click touch", function () {
			return $("#quadra_fixed_modal").removeClass(".active .clickable").addClass("hiding"), $("body").addClass("qfm-hiding"), $(".drop-msg, #back-to-top").removeClass("qfm-time").addClass("modal-hiding"), !1
		}), $(".sidebar").exists() && $(".sidebar").sidebar("attach events", ".sidebar-button", "show").sidebar("setting", "transition", "overlay"), $(window).on("click touchstart touch", function (e) {
			$(".quick-contact-form").fadeOut("fast").removeClass("active"), $("body").removeClass("quick-contact-form-active")
		}), $(".drop-msg, .quick-contact-form-trigger").on("click touch", function () {
			return $(".quick-contact-form").fadeToggle("fast").toggleClass("active"), $("body").toggleClass("quick-contact-form-active"), !1
		}), $(".quick-contact-form, .drop-msg, .quick-contact-form-trigger, #error_message").on("click touch touchstart", function (e) {
			(e = e || window.event).stopPropagation()
		}), $(".waypoint").exists() && $(".waypoint").each(function () {
			var e = $(this);
			$(e).waypoint(function () {
				$(e).addClass("waypoint-active")
			}, {
				offset: "75%"
			})
		}), $("footer.footer-fixed").exists()) {
		var u = $("footer.footer-fixed"),
			f = $(u).outerHeight();
		$('<div class="fullwidth bg-transparent footer-keeper" style="height:' + f + 'px;"></div> ').insertAfter(u), $("body").addClass("footer-fixed-page"), $(window).resize(function () {
			var e = $(u).outerHeight();
			$(".footer-keeper").height(e)
		})
	}
	$("button.dropdown-toggle + .dropdown-menu").each(function () {
		var i = "#" + $(this).attr("aria-labelledby"),
			e = $(this);
		$(e).find("li").on("click", function () {
			var e = $(i).children(),
				t = $(this).find("div").html();
			$(i).text(t).append(e)
		})
	}), $(".quantity").each(function () {
		var e = $(this).find(".minus"),
			t = $(this).find(".plus"),
			i = $(this).find(".numbers");
		$(t).on("click", function () {
			$(i).val(parseInt($(i).val(), 10) + 1)
		}), $(e).on("click", function () {
			$(i).val(parseInt($(i).val(), 10) - 1)
		})
	}), $("#type").exists() && $("#type").typed({
		stringsElement: $("#type-get"),
		typeSpeed: 10,
		backDelay: 800,
		loop: !0,
		contentType: "html",
		loopCount: !1,
		showCursor: !0,
		resetCallback: function () {
			newTyped()
		}
	}), $(".text-typer").exists() && $(".text-typer").each(function () {
		var e = $(this),
			t = $(e).data("delay"),
			i = $(e).data("speed");
		$(e).typed({
			stringsElement: $(e).find(".text-get"),
			typeSpeed: i,
			backDelay: t,
			loop: !0,
			contentType: "html",
			loopCount: !1,
			showCursor: !0,
			resetCallback: function () {
				newTyped()
			}
		})
	}), $(".text-rotator").exists() && $(".text-rotator").each(function () {
		var e = $(this).attr("data-animation"),
			t = $(this).attr("data-speed");
		$(this).Morphext({
			animation: e,
			separator: ",",
			speed: t
		})
	}), $(".twitter-feed").exists() && $(".twitter-feed").each(function () {
		var a = $(this),
			e = $(a).data("username"),
			t = $(a).data("count"),
			o = $(a).data("gap");
		$(a).html("Loading Tweets..."), $.getJSON("php/twitter.php?un=" + e + "&count=" + t, function (e) {
			$(a).empty();
			var i = [];
			if ($.each(e, function (e, t) {
					i.push("<li id='" + e + "'><a href='https://twitter.com/goldeyes/status/" + t.id + "' target='_blank'><i class='fa fa-twitter'></i><span class='tweetText'>" + t.text + "</span>...<span class='postDate'>Posted on " + t.date + "</span></a></li>")
				}), $("<ul/>", {
					class: "twitter-list",
					html: i.join("")
				}).appendTo(a), $(a).find("ul.twitter-list").addClass("gap-" + o), $(".twitter-feed").hasClass("slider")) {
				var t = $(".twitter-feed.slider");
				$(t).find("ul.twitter-list").addClass("twitter-slider circle-dots").slick({
					dots: !0,
					arrows: !1,
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: !0
				})
			}
			$(a).find(".tweetText").text(function (e, t) {
				return t.substr(0, 125)
			})
		})
	}), $(function () {
		var t, i, a, o;
		$(".click-effect").on("click", function (e) {
			0 === $(this).find(".ink").length && $(this).prepend("<span class='ink'></span>"), (t = $(this).find(".ink")).removeClass("clicked"), t.height() || t.width() || (i = Math.max($(this).outerWidth(), $(this).outerHeight()), t.css({
				height: i,
				width: i
			})), a = e.pageX - $(this).offset().left - t.width() / 2, o = e.pageY - $(this).offset().top - t.height() / 2, t.css({
				top: o + "px",
				left: a + "px"
			}).addClass("clicked")
		})
	}), $(".nav>li>a").addClass("nav-link"), $("body").scrollspy({
		target: ".nav-menu",
		offset: 200
	}), $("body").scrollspy({
		target: "menus",
		offset: 250
	}), $("#navigation.sticky").sticky({
		topSpacing: 0
	}), $("#navigation .dropdown-toggle").each(function () {
		$(this).on("mouseenter", function () {
			var e = $(this),
				t = $(e).find(">.dropdown-menu");
			$(t).show(0);
			var i = $("#navigation").offset().top,
				a = $("#navigation").outerHeight(),
				o = $(t).offset().top - i + a,
				n = ($(e).outerWidth(), $(t).outerHeight()),
				s = $(window).outerWidth(),
				d = $(window).outerHeight(),
				l = s - (t.offset().left + t.outerWidth()),
				r = s - (e.offset().left + e.outerWidth()),
				c = d - (o + t.outerHeight());
			l < 30 && ($(t).hasClass("mega-menu") && !$("#navigation").hasClass("side-menu") ? $(t).addClass("to-left").css({
				right: 50 - r + "px"
			}) : $(t).removeClass("to-right to-center").addClass("to-left")), c < 10 ? !$(t).hasClass("mega-menu") && !$("#navigation").hasClass("side-menu") && 0 < $(this).closest(".dropdown-menu").length && $(t).css({
				top: d - (o + n) + 50 + "px"
			}) : 0 < $(this).closest(".dropdown-menu").length ? $(t).css({
				top: "0px"
			}) : $(t).css({
				top: "100%"
			}), $("#navigation .dropdown-toggle").not(this).not($(this).parents(".dropdown-toggle")).not($(this).find(".dropdown-toggle")).find(".dropdown-menu").stop(!0, !0).hide(0)
		}), $(this).on("mouseleave", function () {
			var e = $(this),
				t = $(e).find(">.dropdown-menu");
			$(this).parents(".dropdown-toggle").length ? $(t).hide(0) : $(t).stop(!0, !0).delay(600).hide(0), 0 < $(this).closest(".dropdown-menu").length ? $(t).css({
				top: "0px"
			}) : $(t).css({
				top: "100%"
			})
		}), $("#navigation .nav>li:not(.dropdown-toggle)").on("mouseenter", function () {
			$("#navigation .nav>.dropdown-toggle>.dropdown-menu").stop(!0, !0).hide(0)
		})
	}), $("#navigation.side-menu .dropdown-toggle").each(function () {
		$(this).on("mouseenter", function () {
			var e = $(this),
				t = $(e).find(">.dropdown-menu"),
				i = $("#navigation").offset().top,
				a = t.offset().top,
				o = t.height(),
				n = $(window).height() - (a - i) - o;
			n < 0 && $(t).css({
				top: +n - 20 + "px"
			})
		})
	}), $(".to-center").each(function () {
		var e = $(this).outerWidth();
		1200 < $(window).width() && $(this).css({
			left: -e / 2 + 40 + "px"
		})
	}), $("#navigation .item-note").exists() && $("#navigation .nav-menu .item-note").each(function () {
		$(this).closest("a").addClass("item-noted")
	}), $(".mega-menu").css({
		"max-width": $(window).width() - 40 + "px"
	}), $(window).resize(function () {
		$(".mega-menu").css({
			"max-width": $(window).width() - 40 + "px"
		})
	});
	var m = $("#navigation.modern.jump"),
		g = $("#navigation.modern.shrink");
	$(m).addClass("stability");
	var v = $("#navigation .logo img:not(.retina-logo)"),
		p = $(v).attr("src"),
		b = $(v).data("second-logo"),
		w = $("#navigation .logo img.retina-logo"),
		x = $(w).attr("src"),
		k = $(w).data("second-logo");
	window.scrollBy(0, -1), $.fn.shrinkActive = function () {
		$(g).addClass("scrolled"), $(g).find(v).attr("src", b), $(g).find(w).attr("src", k)
	}, $.fn.shrinkDisable = function () {
		$(g).removeClass("scrolled"), $(g).find(v).attr("src", p), $(g).find(w).attr("src", x)
	}, $.fn.scrollUpNav = function () {
		m.removeClass("scrolled nav_up").addClass("stability").find(v).attr("src", p), $(m).find(w).attr("src", x)
	}, $.fn.scrollDownNav = function () {
		m.hasClass("stability") && (m.addClass("nav_up"), setTimeout(function () {
			m.addClass("scrolled")
		}, 0), setTimeout(function () {
			$(m).find(v).attr("src", b), $(m).find(w).attr("src", k)
		}, 100), setTimeout(function () {
			m.removeClass("nav_up stability")
		}, 200), $("#navigation.jump.pagetopped .logo img:not(.retina-logo)").attr("src", b), $("#navigation.jump.pagetopped .logo img.retina-logo").attr("src", k))
	}, $(window).on("scroll", function () {
		$("#navigation.jump.scrolled:not(.pagetopped)");
		if ($("#pagetop").exists()) {
			var e = 3 * $("#pagetop").height();
			$(this).scrollTop() > e ? $("#navigation").scrollDownNav() : $("#navigation").scrollUpNav(), $(this).scrollTop() > 3 * e ? $(m).addClass("show") : $(m).removeClass("show")
		} else 100 < $(window).scrollTop() ? $("#navigation").scrollDownNav() : $("#navigation").scrollUpNav();
		0 < $(this).scrollTop() ? $(g).hasClass("scrolled") || $(g).shrinkActive() : $(g).hasClass("scrolled") && $(g).shrinkDisable(), $("#navigation-sticky-wrapper").exists() && ($("#navigation-sticky-wrapper").hasClass("is-sticky") && 100 < $(this).scrollTop() ? $(g).shrinkActive() : $(g).shrinkDisable())
	}), $('<div class="mobile-nb"><div class="hamburger-menu"><div class="top-bun"></div><div class="meat"></div><div class="bottom-bun"></div></div></div>').insertAfter("#navigation div.logo"), $(".mobile-nb").on("click", function () {
		setTimeout(function () {
			$("#mobile-navigation").addClass("active")
		}, 300), $("#mobile-navigation-closer").fadeIn()
	}), $('<div id="mobile-navigation" class="nav-menu"><div class="mb-close"></div><div class="nav-el"></div><div class="pagetop"></div></div>').insertAfter("#navigation");
	var y = $("#navigation .nav-menu, #punch-navigation").html(),
		C = $("#navigation .nav-elements").html(),
		T = $("#pagetop").html();
	if ($(y).insertBefore("#mobile-navigation .nav-el"), 1 < $("#navigation .columns .nav-menu").length) {
		var _ = $("#navigation .nav-menu:last-child > ul").html();
		$(_).insertAfter("#mobile-navigation .nav li:last-child")
	}
	if ($("#mobile-navigation .nav-el").append(C), $("#pagetop").exists() && $("#mobile-navigation .pagetop").append(T), $("#mobile-navigation .search-form-trigger").exists() && $("#mobile-navigation .search-form-trigger").appendTo("#mobile-navigation .nav-el"), $("#navigation.side-menu .search").exists() && $("#mobile-navigation .nav-el").append('<a href="#" class="search-form-trigger"><i class="fa fa-search"></i></a>'), $("#navigation.side-menu .menu-bottom").exists()) {
		var S = $("#navigation.side-menu .menu-bottom").html();
		$("#mobile-navigation .pagetop").append(S)
	}
	var q = $("#navigation .logo img").attr("src");
	if ($.fn.changeMobileLogo = function () {
			if ($(window).width() < 1120) {
				var e = $("#navigation .logo img").attr("data-mobile-logo");
				void 0 !== e && !1 !== e && $("#navigation .logo img").attr("src", e)
			} else $("#navigation .logo img").attr("src", q)
		}, $(window).changeMobileLogo(), $('<div id="mobile-navigation-closer"></div><textarea id="math" style="display:none;"></textarea>').insertAfter("#mobile-navigation"), $("#mobile-navigation-closer, .search-form-trigger, .mb-close").on("click", function () {
			$("#mobile-navigation").removeClass("active"), setTimeout(function () {
				$("#mobile-navigation-closer").fadeOut()
			}, 300)
		}), $("#mobile-navigation li.dropdown-toggle > a").append("<i></i>"), $("#mobile-navigation .dropdown-toggle>a").not(".cart-item").on("click touch", function () {
			return $(this).toggleClass("showing").closest("li").find("> ul.dropdown-menu").slideToggle({
				duration: 300,
				easing: "easeInOutQuart"
			}), !1
		}), 1120 < $(window).width() && $("#pagetop").each(function () {
			var e = $(this).outerHeight();
			$("#navigation.modern").not(".sticky, .static").addClass("pagetopped").css("margin-top", e + "px")
		}), $("a[href^='#']:not([href='#']):not(.no-scroll):not([data-slide]):not([data-toggle])").on("click touch", function (e) {
			var t = $(this),
				i = $("#navigation").data("offset"),
				a = $(t).attr("href");
			e.preventDefault(), $(a).length && ($("#navigation").length ? $("html, body").stop().animate({
				scrollTop: $(t.attr("href")).offset().top - i + "px"
			}, 1150, "easeInOutExpo") : $("html, body").stop().animate({
				scrollTop: $(t.attr("href")).offset().top
			}, 900, "easeInOutExpo"))
		}), $("a[href='#top']").on("click", function () {
			$("html, body").stop().animate({
				scrollTop: 0
			}, 1400, "easeInOutExpo")
		}), $(".hide-by-scroll").exists() || $("#back-to-top").exists() || $(".hide-on-home").exists()) {
		$("#back-to-top, .hide-on-home").hide();
		var P = $(window).scrollTop();
		$(window).on("scroll touchmove", function () {
			var e = $(window).scrollTop();
			P - 1 < e && 700 < e ? $(".hide-by-scroll").addClass("hiding") : $(".hide-by-scroll").removeClass("hiding"), P = e, $(window).scrollTop() + $(window).height() === $(document).height() && $(".hide-by-scroll").removeClass("hiding"), 500 < $(this).scrollTop() ? $("#back-to-top, .hide-on-home").fadeIn() : $("#back-to-top, .hide-on-home").fadeOut()
		})
	}
	if ($(".hide-by-click").on("click", function () {
			$(this).fadeOut("slow")
		}), $("#side-dotted-navigation").exists()) {
		l = $("#side-dotted-navigation");
		$(l).on("mouseenter", function () {
			$(this).removeClass("spy")
		}), $(l).on("mouseleave", function () {
			$(this).addClass("spy")
		}), $(l).on("click touch touchstart", function () {
			event = event || window.event, event.stopPropagation()
		})
	}
	if ($.fn.showPunchNavigation = function () {
			$("#punch-navigation").addClass("activated"), $("#punch-navigation .shadow").fadeIn(300), $("body").addClass("o-hidden"), $(".top-elements, .bottom-elements, div.navblock *").delay(950).fadeIn(300), $("body").calculateWidth()
		}, $.fn.hidePunchNavigation = function () {
			$(".top-elements, .bottom-elements, div.navblock>*").fadeOut(300), $("#punch-navigation .shadow").delay(1e3).fadeOut(300), setTimeout(function () {
				$("#punch-navigation").addClass("closing"), $("body").removeClass("o-hidden"), $("body").calculateWidth()
			}, 100), setTimeout(function () {
				$("#punch-navigation").removeClass("closing activated")
			}, 1400)
		}, $(".punch-navigation-trigger").on("click", function () {
			$("#punch-navigation").hasClass("activated") ? $("body").hidePunchNavigation() : $("body").showPunchNavigation(), $(window).width() < 1120 && (setTimeout(function () {
				$("#mobile-navigation").animate({
					left: "0px"
				}, 400, "easeOutSine")
			}, 300), $("#mobile-navigation-closer").fadeIn())
		}), $(document).keyup(function (e) {
			27 === e.keyCode && $("#punch-navigation").hasClass("activated") && $("body").hidePunchNavigation()
		}), $("#punch-navigation .navblock a").not(".nav-title, .nav-subtitle").on("click", function () {
			var e = this.getAttribute("href");
			return $("body").hidePunchNavigation(), setTimeout(function () {
				document.location.href = e
			}, 1500), !1
		}), $("#punch-navigation a.nav-title").on("click", function () {
			return !1
		}), $(".fs-searchform").exists()) {
		var H = $(".search-form-trigger"),
			M = $(".fs-searchform");
		$(H).on("click touch", function (e) {
			return $(M).addClass("active"), setTimeout(function () {
				$(".fs-searchform input").focus()
			}, 900), !1
		}), $(".form-bg").on("click", function () {
			$(".fs-searchform").removeClass("active")
		}), $(document).keyup(function (e) {
			27 === e.keyCode && $(".fs-searchform").removeClass("active")
		}), $(".fs-searchform a").on("click", function () {
			var e = this.getAttribute("href");
			return $(".fs-searchform").removeClass("active"), setTimeout(function () {
				document.location.href = e
			}, 500), !1
		})
	}
	var O = Math.floor(5 * Math.random()),
		I = Math.floor(5 * Math.random()),
		A = O + I;
	$("#math").html(A), $("#verify").attr("placeholder", O + "+" + I + "= ?");
	var z = $("#contact_form, .quick_form, #newsletter_form"),
		W = $(z).attr("data-max-file-size"),
		D = $(z).attr("data-max-file-size-error");
	$.validator.addMethod("filesize", function (e, t, i) {
		return this.optional(t) || t.files[0].size <= i
	}, $("<span id='max_size'>" + D + "</<span>").appendTo(".inputfile + label")), $(z).each(function () {
		var t = $(this).find(":submit"),
			i = ($(this), window.setTimeout(3500));
		$(this).validate({
			ignore: ".ignore",
			rules: {
				verify: {
					equalTo: "#math"
				},
				hiddenRecaptcha: {
					required: function () {
						return "" === grecaptcha.getResponse() ? ($(".g-recaptcha").addClass("error_warning"), !0) : ($(".g-recaptcha").removeClass("error_warning"), !1)
					}
				},
				userfile: {
					required: !0,
					filesize: W
				}
			},
			onfocusout: !1,
			showErrors: function (e, t) {
				this.currentElements.removeClass("error_warning"), this.currentElements.closest(".border-effect").removeClass("error_warning"), $.each(t, function (e, t) {
					window.clearTimeout(i), $(t.element).addClass("error_warning"), $(t.element).closest(".border-effect").addClass("error_warning"), $("div#error_message").fadeIn(300).clearQueue(), $("div#error_message").on("click", function () {
						$(this).fadeOut("fast"), window.clearTimeout(i)
					}), i = window.setTimeout(function () {
						$("div#error_message").fadeOut("fast")
					}, 3500)
				})
			},
			submitHandler: function (e) {
				$(t).not(".loading").addClass("loading").append("<span class='loader'></span>"), $.ajax({
					url: e.action,
					type: e.method,
					data: new FormData($(e)[0]),
					cache: !1,
					contentType: !1,
					processData: !1,
					success: function () {
						$("div#error_message").fadeOut("fast"), $("div#submit_message").fadeIn("fast"), $(z).find(".inputfile + label span").empty(), setTimeout(function () {
							$("div#submit_message").fadeOut("fast")
						}, 5e3), $(t).removeClass("loading"), $(z).trigger("reset")
					}
				})
			}
		})
	});
	var E, N, j, L, G = $("form#newsletter_form"),
		F = $(G).find("button");
	$(G).validate({
			showErrors: function () {
				this.currentElements.removeClass("error_warning"), this.currentElements.closest(".border-effect").removeClass("error_warning")
			},
			submitHandler: function () {
				$(F).not(".loading").addClass("loading").append("<span class='loader'></span>"), $.ajax({
					url: G.action,
					type: G.method,
					data: G.serialize(),
					cache: !1,
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function () {
						$("div#error_message").removeClass("active"), $("div#submit_message").addClass("active"), setTimeout(function () {
							$("div#submit_message").removeClass("active")
						}, 5e3), $(F).removeClass("loading"), $(G).trigger("reset")
					}
				})
			}
		}), $(".qdr-alert-trigger").each(function () {
			var e, t = $(this),
				i = $(t).data("target");
			$(t).on("click", function () {
				clearTimeout(e), $(i).fadeOut(0).stop().clearQueue(), setTimeout(function () {
					$(i).fadeIn(300)
				}, 1), e = setTimeout(function () {
					$(i).fadeOut(300)
				}, 3e3)
			})
		}), jQuery("span.border-effect").each(function () {
			var e = $(this);
			$(e).find("*").on("blur", function () {
				$(e).removeClass("active")
			}).on("focus", function () {
				$(e).addClass("active")
			})
		}), $.fn.callLightboxGallery = function () {
			$(".lightbox_gallery").lightGallery({
				selector: "a:not(.no-lightbox)",
				download: !0,
				speed: 400,
				loop: !0,
				controls: !0,
				thumbWidth: 100,
				thumbContHeight: 100,
				thumbnail: !0,
				thumbMargin: 8,
				share: !0,
				cssEasing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
				loadYoutubeThumbnail: !0,
				youtubeThumbSize: "default",
				iframeMaxWidth: "75%",
				loadVimeoThumbnail: !0,
				vimeoThumbSize: "thumbnail_medium",
				youtubePlayerParams: {
					modestbranding: 1,
					showinfo: 0,
					rel: 0,
					controls: 0
				},
				vimeoPlayerParams: {
					byline: 0,
					portrait: 0,
					color: "A90707"
				}
			}), $(".lightbox_gallery:not(.no-lightbox)").addClass("lightboxed")
		}, $(".lightbox_gallery").exists() && $(window).callLightboxGallery(), $.fn.callLightboxSelected = function () {
			$(".lightbox_selected").lightGallery({
				selector: "a.lightbox_item",
				download: !0,
				speed: 500,
				loop: !0,
				controls: !0,
				thumbWidth: 100,
				thumbContHeight: 100,
				thumbMargin: 8,
				thumbnail: !0,
				share: !0,
				cssEasing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
				loadYoutubeThumbnail: !0,
				youtubeThumbSize: "default",
				loadVimeoThumbnail: !0,
				iframeMaxWidth: "75%",
				vimeoThumbSize: "thumbnail_medium",
				youtubePlayerParams: {
					modestbranding: 1,
					showinfo: 0,
					rel: 0,
					controls: 0
				},
				vimeoPlayerParams: {
					byline: 0,
					portrait: 0,
					color: "A90707"
				}
			})
		}, $(".lightbox_selected").exists() && $(window).callLightboxSelected(), $.fn.callLightbox = function () {
			$(".lightbox").lightGallery({
				selector: "this",
				download: !0,
				thumbWidth: 100,
				thumbContHeight: 100,
				thumbnail: !0,
				share: !0,
				loadYoutubeThumbnail: !0,
				youtubeThumbSize: "default",
				iframeMaxWidth: "75%",
				loadVimeoThumbnail: !0,
				youtubePlayerParams: {
					modestbranding: 1,
					showinfo: 0,
					rel: 0,
					controls: 0
				},
				vimeoPlayerParams: {
					byline: 0,
					portrait: 0,
					color: "A90707"
				}
			})
		}, $(".lightbox").exists() && $(window).callLightbox(), $(".slider-for").exists() && $(".slider-for").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: !0,
			touchThreshold: 150,
			fade: !0,
			asNavFor: ".slider-nav"
		}), $(".slider-nav").exists() && $(".slider-nav").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: ".slider-for",
			touchThreshold: 150,
			dots: !1,
			arrows: !1,
			centerMode: !0,
			focusOnSelect: !0
		}), $(".news-slider").exists() && $(".news-slider").slick({
			dots: !1,
			arrows: !0,
			infinite: !0,
			touchThreshold: 150,
			fade: !0,
			slidesToShow: 1,
			prevArrow: '<button type="button" data-role="none" class="slick-prev qdr-hover" tabindex="0" role="button"></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next qdr-hover" tabindex="0" role="button"></button>',
			slidesToScroll: 1
		}), $(".background-slider").exists() && ($(".background-slider").slick({
			dots: !1,
			arrows: !1,
			infinite: !0,
			autoplay: !0,
			touchThreshold: 150,
			fade: !0,
			slidesToShow: 1,
			slidesToScroll: 1
		}), $(".slider-next-trigger").on("click", function () {
			$(".background-slider").slick("slickNext")
		}), $(".slider-prev-trigger").on("click", function () {
			$(".background-slider").slick("slickPrev")
		})), $(".image-slider").exists() && $(".image-slider").slick({
			dots: !0,
			arrows: !0,
			infinite: !0,
			fade: !0,
			slidesToShow: 1,
			slidesToScroll: 1,
			touchThreshold: 20,
			adaptiveHeight: !0
		}).on("afterChange", function (e, t) {
			$(".custom-slider").slick("slickSetOption", "swipe", !0)
		}), $(".custom-slider").exists() && ($(".custom-slider").each(function () {
			var s = $(this);
			$(s).slick({
				fade: !1,
				dots: !1,
				arrows: !1,
				autoplay: !1,
				autoplaySpeed: 3e3,
				pauseOnHover: !0,
				lazyLoad: "ondemand",
				infinite: !0,
				rtl: !1,
				edgeFriction: 0,
				easing: "linear",
				touchThreshold: 150,
				speed: 400,
				slidesToShow: 3,
				initialSlide: 0,
				draggable: !1,
				adaptiveHeight: !0,
				variableWidth: !1,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" tabindex="0" role="button"></button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" tabindex="0" role="button"></button>',
				centerMode: !1,
				slidesToScroll: 1,
				setPosition: 1,
				swipe: !0,
				touchMove: !0,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			}).on("afterChange", function (e, t, i) {
				if ($(s).hasClass("hero-slider")) {
					$(".hero-slider .animated");
					var a = $(".hero-slider .slick-current .animated"),
						o = $(".hero-slider .slick-slide:not(.slick-current) .animated");
					Waypoint.refreshAll(), $(a).each(function () {
						var e = $(this),
							t = e.data("animation"),
							i = e.data("animation-delay");
						setTimeout(function () {
							e.addClass(t + " visibleme")
						}, i)
					}), $(o).each(function () {
						var e = $(this),
							t = e.data("animation");
						e.removeClass(t + "visibleme")
					}), $(".slick-current video").each(function () {
						this.play()
					}), $(".slick-slide:not(.slick-current) video").each(function () {
						this.pause()
					}), $(s).find(".slick-slide.slick-current .slide-img .scale-timer").addClass("scaling")
				}
			}).on("beforeChange", function (e, t, i, a) {
				Waypoint.refreshAll(), $(n).removeClass("visible");
				var o = $(".hero-slider .slick-slide:not(.slick-current) .animated"),
					n = $(".hero-slider .animated");
				$(o).each(function () {
					var e = $(this),
						t = e.data("animation");
					e.data("animation-delay");
					$(e).removeClass(t + " visibleme")
				}), $(s).find(".slick-slide:not(slick-current) .slide-img .scale-timer").removeClass("scaling")
			})
		}), $(".image-slider, .image-slider-navs, .image-slider-dots").on("touchstart touchmove touchend", function () {
			$(".custom-slider").slick("slickSetOption", "swipe", !1)
		}), $(".custom-slider").on("touchstart touchmove touchend", function () {
			$(".custom-slider").slick("slickSetOption", "swipe", !0)
		}), $(".slick-slider.calculate-height .slick-track").addClass("calculate-height"), $(window).resize(function () {
			$(".slick-slider.calculate-height .slick-track").addClass("calculate-height")
		})), $(".hero-slider").exists() && ($(".hero-slider .slick-slide:not(.slick-current) .animated").removeClass("visible"), $(".slick-slide.slick-current .slide-img .scale-timer").addClass("scaling"), $(".hero-slider .slick-current .animated").each(function () {
			var e = $(this),
				t = e.data("animation"),
				i = e.data("animation-delay");
			$(e).removeClass(t), setTimeout(function () {
				e.addClass(t + " visibleme")
			}, i)
		}), $(".hero-slider-next").on("click", function () {
			$(".hero-slider").slick("slickNext")
		}), $(".hero-slider-prev").on("click", function () {
			$(".hero-slider").slick("slickPrev")
		})), $(".nav-to-custom-slider").exists() && $(".nav-to-custom-slider").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: ".custom-slider",
			dots: !1,
			touchThreshold: 50,
			arrows: !1,
			centerMode: !1,
			focusOnSelect: !0
		}), $("[data-background-color-selector]").exists() && $("[data-background-color-selector]").each(function () {
			var e = $(this),
				t = $(e).attr("data-background-color-selector"),
				i = $("#home").attr("data-background-color-selector");
			e.waypoint(function (e) {
				"down" === e && ($(".bg-changeable").css({
					"background-color": "#" + t
				}), $(".changeable-border").css({
					"border-color": "#" + t
				}))
			}, {
				offset: "60%"
			}), e.waypoint(function (e) {
				"up" === e && ($(".bg-changeable").css({
					"background-color": "#" + t
				}), $(".changeable-border").css({
					"border-color": "#" + t
				}))
			}, {
				offset: "-90%"
			}), $(window).on("scroll", function () {
				$(window).scrollTop() < 10 && ($(".bg-changeable").css({
					"background-color": "#" + i
				}), $(".changeable-border").css({
					"border-color": "#" + i
				}))
			})
		}), $(".modal").each(function () {
			var e = $(this),
				t = $(this).find(".slick-slider");
			$(e).on("show.bs.modal", function (e) {
				setTimeout(function () {
					$(t).addClass("modal-active")
				}, 4e3), 992 < $(window).width() ? setTimeout(function () {
					$(t).slick("refresh")
				}, 300) : setTimeout(function () {
					$(t).resize()
				}, 400)
			}), $(e).on("hidden.bs.modal", function (e) {
				setTimeout(function () {
					$(t).removeClass("modal-active")
				}, 400)
			})
		}), $('.cbp-l-loadMore-button, [data-toggle]:not([data-toggle="popover"]), .cbp-filter-item, .cbp-l-loadMore-link').on("click", function () {
			setTimeout(function () {
				d && !1 === i && (skrollr.init({
					forceHeight: !1
				}).refresh(), $(".icon-navigation").addClass("slow"));
				Waypoint.refreshAll()
			}, 500), setTimeout(function () {
				$(".icon-navigation").removeClass("slow")
			}, 1400)
		}), E = document.body, N = function () {
			$(".cbp-item:last-child").hasClass("cbp-item-loading") && ($(".lightbox_gallery").exists() && ($(".lightbox_gallery").data("lightGallery").destroy(!0), $(window).callLightboxGallery()), $(".lightbox_selected").exists() && ($(".lightbox_selected").data("lightGallery").destroy(!0), $(window).callLightboxSelected()), $(".lightbox").exists() && ($(".lightbox").data("lightGallery").destroy(!0), $(window).callLightbox()))
		}, L = E.clientHeight,
		function e() {
			j = E.clientHeight, L != j && N(), L = j, E.onElementHeightChangeTimer && clearTimeout(E.onElementHeightChangeTimer), E.onElementHeightChangeTimer = setTimeout(e, 200)
		}(), $(".slick-slider").on("beforeChange", function (e, t, i, a) {
			var o = $(this).find(".slick-current iframe");
			setTimeout(function () {
				o.attr("src", o.attr("src"))
			}, 1e3);
			$(this).data("slider-options")
		}), $.fn.calculateWidth = function () {
			$(".calculate-width").each(function () {
				$(this);
				var e = $(this).find("> *").not(".no-calculate").length,
					t = $(this).find("> *").not(".no-calculate"),
					i = $(this).width();
				$(this).addClass("clearfix"), $(t).addClass("width-calculated").css({
					width: i / e + "px"
				})
			})
		}, $("body").calculateWidth(), $(".interactive-packages").exists() && $(".interactive-packages .steps .step").each(function () {
			var t = $(".step").index(this) + 1,
				i = $(this),
				e = i.width(),
				a = $(".interactive-packages .steps").attr("data-startWith");
			$(".selector").css({
				right: e / 2 + "px"
			}), $(".interactive-packages .package_title span.title_selector").text($(a).data("name")), $(".interactive-packages .package-boxes .box1 span.box-title-selector").text($(a).data("box1")), $(".interactive-packages .package-boxes .box2 span.box-title-selector").text($(a).data("box2")), $(".interactive-packages .package-boxes .box3 span.box-title-selector").text($(a).data("box3")), $(".interactive-packages .package-boxes .box4 span.box-title-selector").text($(a).data("box4")), i.on("click", function () {
				var e = $(".steps .step").width();
				$(".interactive_bar").css({
					width: t * e + "px"
				}), $(".interactive-packages .title").removeClass("active"), $(".interactive-packages .title:nth-child(" + t + ")").addClass("active"), $(".interactive-packages .package_title span.title_selector").text(i.data("name")), $(".interactive-packages .package-boxes .box1 span.box-title-selector").text(i.data("box1")), $(".interactive-packages .package-boxes .box2 span.box-title-selector").text(i.data("box2")), $(".interactive-packages .package-boxes .box3 span.box-title-selector").text(i.data("box3")), $(".interactive-packages .package-boxes .box4 span.box-title-selector").text(i.data("box4"))
			})
		}), $(window).resize(function () {
			$("body").verticalPosition(), $("body").makeFullscreen(), $(".bodywidth").width($(window).width()), $("body").calculateWidth(), $("body").getDeviceWidth(), $("body").animatedItems(), $(".calculate-height").calculateHeight(), $(".mnh-full").css({
				"min-height": $(window).height() + "px"
			}), $(".height-full").css({
				height: $(window).height() + "px"
			}), $(".to-center").each(function () {
				var e = $(this).outerWidth();
				1200 < $(window).width() && ($(this).css({
					left: -e / 2 + 40 + "px"
				}), $(".mega-menu").removeClass("mini-screen")), $(window).width() < 1200 && ($(this).css({
					left: -e / 3 + 150 + "px"
				}), $(".mega-menu").addClass("mini-screen"))
			}), 1120 < $(window).width() ? $("#pagetop").each(function () {
				var e = $(this).outerHeight();
				$("#navigation.modern").not(".sticky, .static").addClass("pagetopped").css("margin-top", e + "px")
			}) : $("#navigation.modern").not(".sticky, .static").css({
				"margin-top": 0
			}), $(window).width() < 769 ? $("[data-mobile-background]").each(function () {
				var e = $(this).data("mobile-background");
				$(this).css({
					"background-image": "url(" + e + ")",
					"background-size": "cover !important"
				})
			}) : $("[data-background]").each(function () {
				var e = $(this).data("background");
				$(this).removeClass("bg-mobiled").css({
					"background-image": "url(" + e + ")"
				})
			})
		});
	var Y = $(".page-loader");
	setTimeout(function () {
		Y.addClass("page-loader--fading-out")
	}, 100), setTimeout(function () {
		Y.removeClass("page-loader--fading-out").addClass("page-loader--hidden")
	}, 600), $("a:not(a[href^='#']):not([href='#']):not(.no-scroll):not(.lightbox):not(.lightbox_item):not([data-slide]):not([data-toggle]):not([target]):not(.cbp-lightbox):not(.cbp-singlePage):not(.cbp-l-loadMore-link):not(.more-post-button):not([rel]):not(.nl-field-toggle)").on("click touch", function () {
		var e = this.getAttribute("href"),
			t = $(this);
		if (/\.(?:jpg|jpeg|gif|png|mp3|mp4)$/i.test($(this).attr("href")));
		else if (!t.parents(".lightbox_gallery, #punch-navigation").length) return Y.removeClass("page-loader--hidden").addClass("page-loader--fading-in hide-anim"), setTimeout(function () {
			document.location.href = e
		}, 400), (!0 === i || o || a) && setTimeout(function () {
			Y.hide()
		}, 1200), !1
	}), $.fn.animatedItems = function () {
		1024 < $(window).width() && !1 === i ? $(".animated").not(".hero-slider .animated").each(function () {
			var t = $(this),
				i = t.data("animation");
			$(t).waypoint(function () {
				if (!t.hasClass("visible")) {
					var e = t.data("animation-delay");
					e ? setTimeout(function () {
						t.addClass(i + " visible")
					}, e) : t.addClass(i + " visible")
				}
			}, {
				offset: "90%"
			})
		}) : $(".animated").not(".hero-slider .animated").addClass("visible")
	}, $("body").animatedItems(), $(".bg-animated, .bg-animated-reverse, .bg-animated-vertical").each(function () {
		$("<div class='bg-animator'></div>").appendTo(this)
	}), $.fn.calculateHeight = function () {
		$(".calculate-height").each(function () {
			var e = -1;
			$(this).find(">*").css({
				height: "auto"
			}).each(function () {
				$(this).outerHeight() > e && (e = $(this).outerHeight())
			}), $(this).find(">*").outerHeight(e)
		})
	}, $(".calculate-height").calculateHeight(), $(".sticky-item").exists() && $(".sticky-item").each(function () {
		var e = $(this).data("top-spacing");
		$(this).sticky({
			topSpacing: e
		})
	}), $(".sticky-container").exists() && $(".sticky-container").each(function () {
		var t = $(this),
			i = $(t).width(),
			a = $(t).offset().top,
			e = $(t).data("fix-container"),
			o = $(e).offset().top,
			n = $(e).height() - $(t).height(),
			s = $(t).data("top-spacing"),
			d = o + $(e).outerHeight() - $(t).height();
		$(window).on("scroll", function () {
			$.fn.makeSticky = function () {
				var e = $(window).scrollTop() + s;
				e < a && $(t).css({
					top: "0px",
					position: "absolute",
					"max-width": i + "px"
				}).addClass("before-cont").removeClass("on-cont after-cont"), a < e && $(t).css({
					top: s + "px",
					position: "fixed",
					"max-width": i + "px"
				}).addClass("on-cont").removeClass("before-cont after-cont"), d < e && $(t).css({
					top: n + "px",
					position: "absolute",
					"max-width": i + "px"
				}).addClass("after-cont").removeClass("before-cont on-cont")
			}, $(e).has(t) && 1e3 < $(window).width() && $(t).makeSticky()
		})
	}), $("[data-ajax-load]").exists() && $("[data-ajax-load]").each(function () {
		var e = $(this).data("ajax-load"),
			t = $(this);
		$(this).empty().load(e, function () {
			$(t).hasClass("ajax-slider") && $(this).find(".custom-slider").slick()
		})
	})
}), $("[data-background]").not(".bg-mobiled").each(function () {
	var e = $(this).data("background"),
		t = $(this);
	$(this).css({
		"background-image": "url(" + e + ")"
	}), $(t).ready(function () {
		setTimeout(function () {
			$(t).addClass("loaded")
		}, 50)
	})
}), $("body").has("#navigation.side-menu.left").addClass("left-side-menu-active"), $("body").has("#navigation.side-menu.right").addClass("right-side-menu-active"), $("body").has("#navigation.mini-side-menu.left").addClass("left-mini-side-menu-active"), $("body").has("#navigation.mini-side-menu.right").addClass("right-mini-side-menu-active"), $(".bg-parallax").each(function () {
	var e = $(this);
	$(e).closest("section, .parallax-container").addClass("o-hidden relative z-index-1")
}), $.fn.makeFullscreen = function () {
	$("body").has("#navigation.side-menu") || $("body").has("#mini-side-menu") ? $(".fullscreen").width($("#content").width()).height($(window).height()) : $(".fullscreen").width($(window).width()).height($(window).height())
}, $("body").makeFullscreen(), $(".bodywidth").width($(window).width()), $(".mnh-full").css({
	"min-height": $(window).height() + "px"
}), $(".height-full").css({
	height: $(window).height() + "px"
}), $.fn.countTo = function (o) {
	o = $.extend({}, $.fn.countTo.defaults, o || {});
	var n = Math.ceil(o.speed / o.refreshInterval),
		s = (o.to - o.from) / n;
	return $(this).each(function () {
		var e = this,
			t = 0,
			i = o.from,
			a = setInterval(function () {
				i += s, t++, $(e).html(i.toFixed(o.decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ".")), "function" == typeof o.onUpdate && o.onUpdate.call(e, i);
				n <= t && (clearInterval(a), i = o.to, "function" == typeof o.onComplete && o.onComplete.call(e, i))
			}, o.refreshInterval)
	})
}, $.fn.countTo.defaults = {
	from: 0,
	to: 100,
	speed: 1e3,
	refreshInterval: 100,
	decimals: 0,
	onUpdate: null,
	onComplete: null
}, $(".fact").each(function () {
	$(this).waypoint(function () {
		var e = $(this.element).attr("data-source");
		$(this.element).find(".factor").countTo({
			from: 0,
			to: e,
			speed: 2e3,
			refreshInterval: 25
		}), this.destroy()
	}, {
		offset: "100%"
	})
}), $.fn.digits = function () {
	return this.each(function () {
		$(this).text($(this).text().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
	})
}, $(".digits").digits(), 0 < $(".countdown").length && $(".countdown").each(function () {
	var c = $(this);
	! function (e) {
		var l, r = new Date(e);
		$(c);

		function t() {
			var e = new Date,
				t = r - e;
			if (t < 0) return clearInterval(l), void $(c).html("EXPIRED");
			var i = Math.floor(t / 31536e6),
				a = Math.floor(t % 31536e6 / 864e5),
				o = Math.floor(t % 864e5 / 36e5),
				n = Math.floor(t % 36e5 / 6e4),
				s = Math.floor(t % 6e4 / 1e3);
			String(o).length < 2 && (o = 0 + String(o)), String(n).length < 2 && (n = 0 + String(n)), String(s).length < 2 && (s = 0 + String(s));
			var d = '<div class="countdowns"><div class="year"><span class="time">' + i + '</span><span class="datename"> years</span></div><span class="dot">:</span><div><span class="time">' + a + '</span><span class="datename"> days </span></div><span class="dot">:</span><div><span class="time">' + o + '</span><span class="datename"> hours </span></div><span class="dot">:</span><div><span class="time">' + n + '</span><span class="datename"> minutes </span></div><span class="dot">:</span><div><span class="time">' + s + '</span><span class="datename"> seconds </span></div></div>';
			$(c).html(d), i < 1 && $(c).find(".year, .year + .dot").hide()
		}
		t(), l = setInterval(t, 1e3)
	}($(this).attr("data-time"))
});