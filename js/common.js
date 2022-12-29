// Ion.RangeSlider, 2.3.1, © Denis Ineshin, 2010 - 2019, IonDen.com, Build date: 2019-12-19 16:56:44
!(function (i) {
  ("undefined" != typeof jQuery && jQuery) ||
  "function" != typeof define ||
  !define.amd
    ? ("undefined" != typeof jQuery && jQuery) || "object" != typeof exports
      ? i(jQuery, document, window, navigator)
      : i(require("jquery"), document, window, navigator)
    : define(["jquery"], function (t) {
        return i(t, document, window, navigator);
      });
})(function (a, c, l, t, _) {
  "use strict";
  var i,
    s,
    o = 0,
    e =
      ((i = t.userAgent),
      (s = /msie\s\d+/i),
      0 < i.search(s) &&
        s.exec(i).toString().split(" ")[1] < 9 &&
        (a("html").addClass("lt-ie9"), !0));
  Function.prototype.bind ||
    (Function.prototype.bind = function (o) {
      var e = this,
        h = [].slice;
      if ("function" != typeof e) throw new TypeError();
      var r = h.call(arguments, 1),
        n = function () {
          if (this instanceof n) {
            var t = function () {};
            t.prototype = e.prototype;
            var i = new t(),
              s = e.apply(i, r.concat(h.call(arguments)));
            return Object(s) === s ? s : i;
          }
          return e.apply(o, r.concat(h.call(arguments)));
        };
      return n;
    }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (t, i) {
        var s;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var o = Object(this),
          e = o.length >>> 0;
        if (0 == e) return -1;
        var h = +i || 0;
        if ((Math.abs(h) === 1 / 0 && (h = 0), e <= h)) return -1;
        for (s = Math.max(0 <= h ? h : e - Math.abs(h), 0); s < e; ) {
          if (s in o && o[s] === t) return s;
          s++;
        }
        return -1;
      });
  function h(t, i, s) {
    (this.VERSION = "2.3.1"),
      (this.input = t),
      (this.plugin_count = s),
      (this.current_plugin = 0),
      (this.calc_count = 0),
      (this.update_tm = 0),
      (this.old_from = 0),
      (this.old_to = 0),
      (this.old_min_interval = null),
      (this.raf_id = null),
      (this.dragging = !1),
      (this.force_redraw = !1),
      (this.no_diapason = !1),
      (this.has_tab_index = !0),
      (this.is_key = !1),
      (this.is_update = !1),
      (this.is_start = !0),
      (this.is_finish = !1),
      (this.is_active = !1),
      (this.is_resize = !1),
      (this.is_click = !1),
      (i = i || {}),
      (this.$cache = {
        win: a(l),
        body: a(c.body),
        input: a(t),
        cont: null,
        rs: null,
        min: null,
        max: null,
        from: null,
        to: null,
        single: null,
        bar: null,
        line: null,
        s_single: null,
        s_from: null,
        s_to: null,
        shad_single: null,
        shad_from: null,
        shad_to: null,
        edge: null,
        grid: null,
        grid_labels: [],
      }),
      (this.coords = {
        x_gap: 0,
        x_pointer: 0,
        w_rs: 0,
        w_rs_old: 0,
        w_handle: 0,
        p_gap: 0,
        p_gap_left: 0,
        p_gap_right: 0,
        p_step: 0,
        p_pointer: 0,
        p_handle: 0,
        p_single_fake: 0,
        p_single_real: 0,
        p_from_fake: 0,
        p_from_real: 0,
        p_to_fake: 0,
        p_to_real: 0,
        p_bar_x: 0,
        p_bar_w: 0,
        grid_gap: 0,
        big_num: 0,
        big: [],
        big_w: [],
        big_p: [],
        big_x: [],
      }),
      (this.labels = {
        w_min: 0,
        w_max: 0,
        w_from: 0,
        w_to: 0,
        w_single: 0,
        p_min: 0,
        p_max: 0,
        p_from_fake: 0,
        p_from_left: 0,
        p_to_fake: 0,
        p_to_left: 0,
        p_single_fake: 0,
        p_single_left: 0,
      });
    var o,
      e,
      h,
      r = this.$cache.input,
      n = r.prop("value");
    for (h in ((o = {
      skin: "flat",
      type: "single",
      min: 10,
      max: 100,
      from: null,
      to: null,
      step: 1,
      min_interval: 0,
      max_interval: 0,
      drag_interval: !1,
      values: [],
      p_values: [],
      from_fixed: !1,
      from_min: null,
      from_max: null,
      from_shadow: !1,
      to_fixed: !1,
      to_min: null,
      to_max: null,
      to_shadow: !1,
      prettify_enabled: !0,
      prettify_separator: " ",
      prettify: null,
      force_edges: !1,
      keyboard: !0,
      grid: !1,
      grid_margin: !0,
      grid_num: 4,
      grid_snap: !1,
      hide_min_max: !1,
      hide_from_to: !1,
      prefix: "",
      postfix: "",
      max_postfix: "",
      decorate_both: !0,
      values_separator: " — ",
      input_values_separator: ";",
      disable: !1,
      block: !1,
      extra_classes: "",
      scope: null,
      onStart: null,
      onChange: null,
      onFinish: null,
      onUpdate: null,
    }),
    "INPUT" !== r[0].nodeName &&
      console &&
      console.warn &&
      console.warn("Base element should be <input>!", r[0]),
    ((e = {
      skin: r.data("skin"),
      type: r.data("type"),
      min: r.data("min"),
      max: r.data("max"),
      from: r.data("from"),
      to: r.data("to"),
      step: r.data("step"),
      min_interval: r.data("minInterval"),
      max_interval: r.data("maxInterval"),
      drag_interval: r.data("dragInterval"),
      values: r.data("values"),
      from_fixed: r.data("fromFixed"),
      from_min: r.data("fromMin"),
      from_max: r.data("fromMax"),
      from_shadow: r.data("fromShadow"),
      to_fixed: r.data("toFixed"),
      to_min: r.data("toMin"),
      to_max: r.data("toMax"),
      to_shadow: r.data("toShadow"),
      prettify_enabled: r.data("prettifyEnabled"),
      prettify_separator: r.data("prettifySeparator"),
      force_edges: r.data("forceEdges"),
      keyboard: r.data("keyboard"),
      grid: r.data("grid"),
      grid_margin: r.data("gridMargin"),
      grid_num: r.data("gridNum"),
      grid_snap: r.data("gridSnap"),
      hide_min_max: r.data("hideMinMax"),
      hide_from_to: r.data("hideFromTo"),
      prefix: r.data("prefix"),
      postfix: r.data("postfix"),
      max_postfix: r.data("maxPostfix"),
      decorate_both: r.data("decorateBoth"),
      values_separator: r.data("valuesSeparator"),
      input_values_separator: r.data("inputValuesSeparator"),
      disable: r.data("disable"),
      block: r.data("block"),
      extra_classes: r.data("extraClasses"),
    }).values = e.values && e.values.split(",")),
    e))
      e.hasOwnProperty(h) && ((e[h] !== _ && "" !== e[h]) || delete e[h]);
    n !== _ &&
      "" !== n &&
      ((n = n.split(
        e.input_values_separator || i.input_values_separator || ";"
      ))[0] &&
        n[0] == +n[0] &&
        (n[0] = +n[0]),
      n[1] && n[1] == +n[1] && (n[1] = +n[1]),
      i && i.values && i.values.length
        ? ((o.from = n[0] && i.values.indexOf(n[0])),
          (o.to = n[1] && i.values.indexOf(n[1])))
        : ((o.from = n[0] && +n[0]), (o.to = n[1] && +n[1]))),
      a.extend(o, i),
      a.extend(o, e),
      (this.options = o),
      (this.update_check = {}),
      this.validate(),
      (this.result = {
        input: this.$cache.input,
        slider: null,
        min: this.options.min,
        max: this.options.max,
        from: this.options.from,
        from_percent: 0,
        from_value: null,
        to: this.options.to,
        to_percent: 0,
        to_value: null,
      }),
      this.init();
  }
  (h.prototype = {
    init: function (t) {
      (this.no_diapason = !1),
        (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
        (this.target = "base"),
        this.toggleInput(),
        this.append(),
        this.setMinMax(),
        t
          ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate())
          : ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
        this.updateScene();
    },
    append: function () {
      var t =
        '<span class="irs irs--' +
        this.options.skin +
        " js-irs-" +
        this.plugin_count +
        " " +
        this.options.extra_classes +
        '"></span>';
      this.$cache.input.before(t),
        this.$cache.input.prop("readonly", !0),
        (this.$cache.cont = this.$cache.input.prev()),
        (this.result.slider = this.$cache.cont),
        this.$cache.cont.html(
          '<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'
        ),
        (this.$cache.rs = this.$cache.cont.find(".irs")),
        (this.$cache.min = this.$cache.cont.find(".irs-min")),
        (this.$cache.max = this.$cache.cont.find(".irs-max")),
        (this.$cache.from = this.$cache.cont.find(".irs-from")),
        (this.$cache.to = this.$cache.cont.find(".irs-to")),
        (this.$cache.single = this.$cache.cont.find(".irs-single")),
        (this.$cache.line = this.$cache.cont.find(".irs-line")),
        (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
        "single" === this.options.type
          ? (this.$cache.cont.append(
              '<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'
            ),
            (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
            (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
            (this.$cache.s_single = this.$cache.cont.find(".single")),
            (this.$cache.from[0].style.visibility = "hidden"),
            (this.$cache.to[0].style.visibility = "hidden"),
            (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
          : (this.$cache.cont.append(
              '<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'
            ),
            (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
            (this.$cache.s_from = this.$cache.cont.find(".from")),
            (this.$cache.s_to = this.$cache.cont.find(".to")),
            (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
            (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
            this.setTopHandler()),
        this.options.hide_from_to &&
          ((this.$cache.from[0].style.display = "none"),
          (this.$cache.to[0].style.display = "none"),
          (this.$cache.single[0].style.display = "none")),
        this.appendGrid(),
        this.options.disable
          ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0))
          : ((this.$cache.input[0].disabled = !1),
            this.removeDisableMask(),
            this.bindEvents()),
        this.options.disable ||
          (this.options.block
            ? this.appendDisableMask()
            : this.removeDisableMask()),
        this.options.drag_interval &&
          (this.$cache.bar[0].style.cursor = "ew-resize");
    },
    setTopHandler: function () {
      var t = this.options.min,
        i = this.options.max,
        s = this.options.from,
        o = this.options.to;
      t < s && o === i
        ? this.$cache.s_from.addClass("type_last")
        : o < i && this.$cache.s_to.addClass("type_last");
    },
    changeLevel: function (t) {
      switch (t) {
        case "single":
          (this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_single_fake
          )),
            this.$cache.s_single.addClass("state_hover");
          break;
        case "from":
          (this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_from_fake
          )),
            this.$cache.s_from.addClass("state_hover"),
            this.$cache.s_from.addClass("type_last"),
            this.$cache.s_to.removeClass("type_last");
          break;
        case "to":
          (this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_to_fake
          )),
            this.$cache.s_to.addClass("state_hover"),
            this.$cache.s_to.addClass("type_last"),
            this.$cache.s_from.removeClass("type_last");
          break;
        case "both":
          (this.coords.p_gap_left = this.toFixed(
            this.coords.p_pointer - this.coords.p_from_fake
          )),
            (this.coords.p_gap_right = this.toFixed(
              this.coords.p_to_fake - this.coords.p_pointer
            )),
            this.$cache.s_to.removeClass("type_last"),
            this.$cache.s_from.removeClass("type_last");
      }
    },
    appendDisableMask: function () {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>'),
        this.$cache.cont.addClass("irs-disabled");
    },
    removeDisableMask: function () {
      this.$cache.cont.remove(".irs-disable-mask"),
        this.$cache.cont.removeClass("irs-disabled");
    },
    remove: function () {
      this.$cache.cont.remove(),
        (this.$cache.cont = null),
        this.$cache.line.off("keydown.irs_" + this.plugin_count),
        this.$cache.body.off("touchmove.irs_" + this.plugin_count),
        this.$cache.body.off("mousemove.irs_" + this.plugin_count),
        this.$cache.win.off("touchend.irs_" + this.plugin_count),
        this.$cache.win.off("mouseup.irs_" + this.plugin_count),
        e &&
          (this.$cache.body.off("mouseup.irs_" + this.plugin_count),
          this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
        (this.$cache.grid_labels = []),
        (this.coords.big = []),
        (this.coords.big_w = []),
        (this.coords.big_p = []),
        (this.coords.big_x = []),
        cancelAnimationFrame(this.raf_id);
    },
    bindEvents: function () {
      this.no_diapason ||
        (this.$cache.body.on(
          "touchmove.irs_" + this.plugin_count,
          this.pointerMove.bind(this)
        ),
        this.$cache.body.on(
          "mousemove.irs_" + this.plugin_count,
          this.pointerMove.bind(this)
        ),
        this.$cache.win.on(
          "touchend.irs_" + this.plugin_count,
          this.pointerUp.bind(this)
        ),
        this.$cache.win.on(
          "mouseup.irs_" + this.plugin_count,
          this.pointerUp.bind(this)
        ),
        this.$cache.line.on(
          "touchstart.irs_" + this.plugin_count,
          this.pointerClick.bind(this, "click")
        ),
        this.$cache.line.on(
          "mousedown.irs_" + this.plugin_count,
          this.pointerClick.bind(this, "click")
        ),
        this.$cache.line.on(
          "focus.irs_" + this.plugin_count,
          this.pointerFocus.bind(this)
        ),
        this.options.drag_interval && "double" === this.options.type
          ? (this.$cache.bar.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "both")
            ),
            this.$cache.bar.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "both")
            ))
          : (this.$cache.bar.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.bar.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            )),
        "single" === this.options.type
          ? (this.$cache.single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.s_single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.shad_single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.s_single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.edge.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ))
          : (this.$cache.single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, null)
            ),
            this.$cache.single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, null)
            ),
            this.$cache.from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.s_from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.s_to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.shad_from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.s_from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.s_to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.shad_from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            )),
        this.options.keyboard &&
          this.$cache.line.on(
            "keydown.irs_" + this.plugin_count,
            this.key.bind(this, "keyboard")
          ),
        e &&
          (this.$cache.body.on(
            "mouseup.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          ),
          this.$cache.body.on(
            "mouseleave.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          )));
    },
    pointerFocus: function (t) {
      var i, s;
      this.target ||
        ((i = (s =
          "single" === this.options.type
            ? this.$cache.single
            : this.$cache.from).offset().left),
        (i += s.width() / 2 - 1),
        this.pointerClick("single", {
          preventDefault: function () {},
          pageX: i,
        }));
    },
    pointerMove: function (t) {
      if (this.dragging) {
        var i =
          t.pageX ||
          (t.originalEvent.touches && t.originalEvent.touches[0].pageX);
        (this.coords.x_pointer = i - this.coords.x_gap), this.calc();
      }
    },
    pointerUp: function (t) {
      this.current_plugin === this.plugin_count &&
        this.is_active &&
        ((this.is_active = !1),
        this.$cache.cont.find(".state_hover").removeClass("state_hover"),
        (this.force_redraw = !0),
        e && a("*").prop("unselectable", !1),
        this.updateScene(),
        this.restoreOriginalMinInterval(),
        (a.contains(this.$cache.cont[0], t.target) || this.dragging) &&
          this.callOnFinish(),
        (this.dragging = !1));
    },
    pointerDown: function (t, i) {
      i.preventDefault();
      var s =
        i.pageX ||
        (i.originalEvent.touches && i.originalEvent.touches[0].pageX);
      2 !== i.button &&
        ("both" === t && this.setTempMinInterval(),
        (t = t || this.target || "from"),
        (this.current_plugin = this.plugin_count),
        (this.target = t),
        (this.is_active = !0),
        (this.dragging = !0),
        (this.coords.x_gap = this.$cache.rs.offset().left),
        (this.coords.x_pointer = s - this.coords.x_gap),
        this.calcPointerPercent(),
        this.changeLevel(t),
        e && a("*").prop("unselectable", !0),
        this.$cache.line.trigger("focus"),
        this.updateScene());
    },
    pointerClick: function (t, i) {
      i.preventDefault();
      var s =
        i.pageX ||
        (i.originalEvent.touches && i.originalEvent.touches[0].pageX);
      2 !== i.button &&
        ((this.current_plugin = this.plugin_count),
        (this.target = t),
        (this.is_click = !0),
        (this.coords.x_gap = this.$cache.rs.offset().left),
        (this.coords.x_pointer = +(s - this.coords.x_gap).toFixed()),
        (this.force_redraw = !0),
        this.calc(),
        this.$cache.line.trigger("focus"));
    },
    key: function (t, i) {
      if (
        !(
          this.current_plugin !== this.plugin_count ||
          i.altKey ||
          i.ctrlKey ||
          i.shiftKey ||
          i.metaKey
        )
      ) {
        switch (i.which) {
          case 83:
          case 65:
          case 40:
          case 37:
            i.preventDefault(), this.moveByKey(!1);
            break;
          case 87:
          case 68:
          case 38:
          case 39:
            i.preventDefault(), this.moveByKey(!0);
        }
        return !0;
      }
    },
    moveByKey: function (t) {
      var i = this.coords.p_pointer,
        s = (this.options.max - this.options.min) / 100;
      (s = this.options.step / s),
        t ? (i += s) : (i -= s),
        (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * i)),
        (this.is_key = !0),
        this.calc();
    },
    setMinMax: function () {
      if (this.options) {
        if (this.options.hide_min_max)
          return (
            (this.$cache.min[0].style.display = "none"),
            void (this.$cache.max[0].style.display = "none")
          );
        if (this.options.values.length)
          this.$cache.min.html(
            this.decorate(this.options.p_values[this.options.min])
          ),
            this.$cache.max.html(
              this.decorate(this.options.p_values[this.options.max])
            );
        else {
          var t = this._prettify(this.options.min),
            i = this._prettify(this.options.max);
          (this.result.min_pretty = t),
            (this.result.max_pretty = i),
            this.$cache.min.html(this.decorate(t, this.options.min)),
            this.$cache.max.html(this.decorate(i, this.options.max));
        }
        (this.labels.w_min = this.$cache.min.outerWidth(!1)),
          (this.labels.w_max = this.$cache.max.outerWidth(!1));
      }
    },
    setTempMinInterval: function () {
      var t = this.result.to - this.result.from;
      null === this.old_min_interval &&
        (this.old_min_interval = this.options.min_interval),
        (this.options.min_interval = t);
    },
    restoreOriginalMinInterval: function () {
      null !== this.old_min_interval &&
        ((this.options.min_interval = this.old_min_interval),
        (this.old_min_interval = null));
    },
    calc: function (t) {
      if (
        this.options &&
        (this.calc_count++,
        (10 !== this.calc_count && !t) ||
          ((this.calc_count = 0),
          (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
          this.calcHandlePercent()),
        this.coords.w_rs)
      ) {
        this.calcPointerPercent();
        var i = this.getHandleX();
        switch (
          ("both" === this.target &&
            ((this.coords.p_gap = 0), (i = this.getHandleX())),
          "click" === this.target &&
            ((this.coords.p_gap = this.coords.p_handle / 2),
            (i = this.getHandleX()),
            this.options.drag_interval
              ? (this.target = "both_one")
              : (this.target = this.chooseHandle(i))),
          this.target)
        ) {
          case "base":
            var s = (this.options.max - this.options.min) / 100,
              o = (this.result.from - this.options.min) / s,
              e = (this.result.to - this.options.min) / s;
            (this.coords.p_single_real = this.toFixed(o)),
              (this.coords.p_from_real = this.toFixed(o)),
              (this.coords.p_to_real = this.toFixed(e)),
              (this.coords.p_single_real = this.checkDiapason(
                this.coords.p_single_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_single_fake = this.convertToFakePercent(
                this.coords.p_single_real
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              )),
              (this.target = null);
            break;
          case "single":
            if (this.options.from_fixed) break;
            (this.coords.p_single_real = this.convertToRealPercent(i)),
              (this.coords.p_single_real = this.calcWithStep(
                this.coords.p_single_real
              )),
              (this.coords.p_single_real = this.checkDiapason(
                this.coords.p_single_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_single_fake = this.convertToFakePercent(
                this.coords.p_single_real
              ));
            break;
          case "from":
            if (this.options.from_fixed) break;
            (this.coords.p_from_real = this.convertToRealPercent(i)),
              (this.coords.p_from_real = this.calcWithStep(
                this.coords.p_from_real
              )),
              this.coords.p_from_real > this.coords.p_to_real &&
                (this.coords.p_from_real = this.coords.p_to_real),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_real = this.checkMinInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              )),
              (this.coords.p_from_real = this.checkMaxInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              ));
            break;
          case "to":
            if (this.options.to_fixed) break;
            (this.coords.p_to_real = this.convertToRealPercent(i)),
              (this.coords.p_to_real = this.calcWithStep(
                this.coords.p_to_real
              )),
              this.coords.p_to_real < this.coords.p_from_real &&
                (this.coords.p_to_real = this.coords.p_from_real),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_to_real = this.checkMinInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              )),
              (this.coords.p_to_real = this.checkMaxInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              ));
            break;
          case "both":
            if (this.options.from_fixed || this.options.to_fixed) break;
            (i = this.toFixed(i + 0.001 * this.coords.p_handle)),
              (this.coords.p_from_real =
                this.convertToRealPercent(i) - this.coords.p_gap_left),
              (this.coords.p_from_real = this.calcWithStep(
                this.coords.p_from_real
              )),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_real = this.checkMinInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              )),
              (this.coords.p_to_real =
                this.convertToRealPercent(i) + this.coords.p_gap_right),
              (this.coords.p_to_real = this.calcWithStep(
                this.coords.p_to_real
              )),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_to_real = this.checkMinInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              ));
            break;
          case "both_one":
            if (this.options.from_fixed || this.options.to_fixed) break;
            var h = this.convertToRealPercent(i),
              r = this.result.from_percent,
              n = this.result.to_percent - r,
              a = n / 2,
              c = h - a,
              l = h + a;
            c < 0 && (l = (c = 0) + n),
              100 < l && (c = (l = 100) - n),
              (this.coords.p_from_real = this.calcWithStep(c)),
              (this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              )),
              (this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              )),
              (this.coords.p_to_real = this.calcWithStep(l)),
              (this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              )),
              (this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              ));
        }
        "single" === this.options.type
          ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
            (this.coords.p_bar_w = this.coords.p_single_fake),
            (this.result.from_percent = this.coords.p_single_real),
            (this.result.from = this.convertToValue(this.coords.p_single_real)),
            (this.result.from_pretty = this._prettify(this.result.from)),
            this.options.values.length &&
              (this.result.from_value = this.options.values[this.result.from]))
          : ((this.coords.p_bar_x = this.toFixed(
              this.coords.p_from_fake + this.coords.p_handle / 2
            )),
            (this.coords.p_bar_w = this.toFixed(
              this.coords.p_to_fake - this.coords.p_from_fake
            )),
            (this.result.from_percent = this.coords.p_from_real),
            (this.result.from = this.convertToValue(this.coords.p_from_real)),
            (this.result.from_pretty = this._prettify(this.result.from)),
            (this.result.to_percent = this.coords.p_to_real),
            (this.result.to = this.convertToValue(this.coords.p_to_real)),
            (this.result.to_pretty = this._prettify(this.result.to)),
            this.options.values.length &&
              ((this.result.from_value = this.options.values[this.result.from]),
              (this.result.to_value = this.options.values[this.result.to]))),
          this.calcMinMax(),
          this.calcLabels();
      }
    },
    calcPointerPercent: function () {
      this.coords.w_rs
        ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)
            ? (this.coords.x_pointer = 0)
            : this.coords.x_pointer > this.coords.w_rs &&
              (this.coords.x_pointer = this.coords.w_rs),
          (this.coords.p_pointer = this.toFixed(
            (this.coords.x_pointer / this.coords.w_rs) * 100
          )))
        : (this.coords.p_pointer = 0);
    },
    convertToRealPercent: function (t) {
      return (t / (100 - this.coords.p_handle)) * 100;
    },
    convertToFakePercent: function (t) {
      return (t / 100) * (100 - this.coords.p_handle);
    },
    getHandleX: function () {
      var t = 100 - this.coords.p_handle,
        i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      return i < 0 ? (i = 0) : t < i && (i = t), i;
    },
    calcHandlePercent: function () {
      "single" === this.options.type
        ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1))
        : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
        (this.coords.p_handle = this.toFixed(
          (this.coords.w_handle / this.coords.w_rs) * 100
        ));
    },
    chooseHandle: function (t) {
      return "single" === this.options.type
        ? "single"
        : this.coords.p_from_real +
            (this.coords.p_to_real - this.coords.p_from_real) / 2 <=
          t
        ? this.options.to_fixed
          ? "from"
          : "to"
        : this.options.from_fixed
        ? "to"
        : "from";
    },
    calcMinMax: function () {
      this.coords.w_rs &&
        ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100),
        (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
    },
    calcLabels: function () {
      this.coords.w_rs &&
        !this.options.hide_from_to &&
        ("single" === this.options.type
          ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
            (this.labels.p_single_fake =
              (this.labels.w_single / this.coords.w_rs) * 100),
            (this.labels.p_single_left =
              this.coords.p_single_fake +
              this.coords.p_handle / 2 -
              this.labels.p_single_fake / 2))
          : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
            (this.labels.p_from_fake =
              (this.labels.w_from / this.coords.w_rs) * 100),
            (this.labels.p_from_left =
              this.coords.p_from_fake +
              this.coords.p_handle / 2 -
              this.labels.p_from_fake / 2),
            (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
            (this.labels.p_from_left = this.checkEdges(
              this.labels.p_from_left,
              this.labels.p_from_fake
            )),
            (this.labels.w_to = this.$cache.to.outerWidth(!1)),
            (this.labels.p_to_fake =
              (this.labels.w_to / this.coords.w_rs) * 100),
            (this.labels.p_to_left =
              this.coords.p_to_fake +
              this.coords.p_handle / 2 -
              this.labels.p_to_fake / 2),
            (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
            (this.labels.p_to_left = this.checkEdges(
              this.labels.p_to_left,
              this.labels.p_to_fake
            )),
            (this.labels.w_single = this.$cache.single.outerWidth(!1)),
            (this.labels.p_single_fake =
              (this.labels.w_single / this.coords.w_rs) * 100),
            (this.labels.p_single_left =
              (this.labels.p_from_left +
                this.labels.p_to_left +
                this.labels.p_to_fake) /
                2 -
              this.labels.p_single_fake / 2),
            (this.labels.p_single_left = this.toFixed(
              this.labels.p_single_left
            ))),
        (this.labels.p_single_left = this.checkEdges(
          this.labels.p_single_left,
          this.labels.p_single_fake
        )));
    },
    updateScene: function () {
      this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
        clearTimeout(this.update_tm),
        (this.update_tm = null),
        this.options &&
          (this.drawHandles(),
          this.is_active
            ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this)))
            : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
    },
    drawHandles: function () {
      (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
        this.coords.w_rs &&
          (this.coords.w_rs !== this.coords.w_rs_old &&
            ((this.target = "base"), (this.is_resize = !0)),
          (this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw) ||
            (this.setMinMax(),
            this.calc(!0),
            this.drawLabels(),
            this.options.grid && (this.calcGridMargin(), this.calcGridLabels()),
            (this.force_redraw = !0),
            (this.coords.w_rs_old = this.coords.w_rs),
            this.drawShadow()),
          this.coords.w_rs &&
            (this.dragging || this.force_redraw || this.is_key) &&
            ((this.old_from !== this.result.from ||
              this.old_to !== this.result.to ||
              this.force_redraw ||
              this.is_key) &&
              (this.drawLabels(),
              (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
              (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
              "single" === this.options.type
                ? ((this.$cache.bar[0].style.left = 0),
                  (this.$cache.bar[0].style.width =
                    this.coords.p_bar_w + this.coords.p_bar_x + "%"),
                  (this.$cache.s_single[0].style.left =
                    this.coords.p_single_fake + "%"))
                : ((this.$cache.s_from[0].style.left =
                    this.coords.p_from_fake + "%"),
                  (this.$cache.s_to[0].style.left =
                    this.coords.p_to_fake + "%"),
                  (this.old_from === this.result.from && !this.force_redraw) ||
                    (this.$cache.from[0].style.left =
                      this.labels.p_from_left + "%"),
                  (this.old_to === this.result.to && !this.force_redraw) ||
                    (this.$cache.to[0].style.left =
                      this.labels.p_to_left + "%")),
              (this.$cache.single[0].style.left =
                this.labels.p_single_left + "%"),
              this.writeToInput(),
              (this.old_from === this.result.from &&
                this.old_to === this.result.to) ||
                this.is_start ||
                (this.$cache.input.trigger("change"),
                this.$cache.input.trigger("input")),
              (this.old_from = this.result.from),
              (this.old_to = this.result.to),
              this.is_resize ||
                this.is_update ||
                this.is_start ||
                this.is_finish ||
                this.callOnChange(),
              (this.is_key || this.is_click) &&
                ((this.is_key = !1), (this.is_click = !1), this.callOnFinish()),
              (this.is_update = !1),
              (this.is_resize = !1),
              (this.is_finish = !1)),
            (this.is_start = !1),
            (this.is_key = !1),
            (this.is_click = !1),
            (this.force_redraw = !1)));
    },
    drawLabels: function () {
      if (this.options) {
        var t,
          i,
          s,
          o,
          e,
          h = this.options.values.length,
          r = this.options.p_values;
        if (!this.options.hide_from_to)
          if ("single" === this.options.type)
            (t = h
              ? this.decorate(r[this.result.from])
              : ((o = this._prettify(this.result.from)),
                this.decorate(o, this.result.from))),
              this.$cache.single.html(t),
              this.calcLabels(),
              this.labels.p_single_left < this.labels.p_min + 1
                ? (this.$cache.min[0].style.visibility = "hidden")
                : (this.$cache.min[0].style.visibility = "visible"),
              this.labels.p_single_left + this.labels.p_single_fake >
              100 - this.labels.p_max - 1
                ? (this.$cache.max[0].style.visibility = "hidden")
                : (this.$cache.max[0].style.visibility = "visible");
          else {
            (s = h
              ? (this.options.decorate_both
                  ? ((t = this.decorate(r[this.result.from])),
                    (t += this.options.values_separator),
                    (t += this.decorate(r[this.result.to])))
                  : (t = this.decorate(
                      r[this.result.from] +
                        this.options.values_separator +
                        r[this.result.to]
                    )),
                (i = this.decorate(r[this.result.from])),
                this.decorate(r[this.result.to]))
              : ((o = this._prettify(this.result.from)),
                (e = this._prettify(this.result.to)),
                this.options.decorate_both
                  ? ((t = this.decorate(o, this.result.from)),
                    (t += this.options.values_separator),
                    (t += this.decorate(e, this.result.to)))
                  : (t = this.decorate(
                      o + this.options.values_separator + e,
                      this.result.to
                    )),
                (i = this.decorate(o, this.result.from)),
                this.decorate(e, this.result.to))),
              this.$cache.single.html(t),
              this.$cache.from.html(i),
              this.$cache.to.html(s),
              this.calcLabels();
            var n = Math.min(
                this.labels.p_single_left,
                this.labels.p_from_left
              ),
              a = this.labels.p_single_left + this.labels.p_single_fake,
              c = this.labels.p_to_left + this.labels.p_to_fake,
              l = Math.max(a, c);
            this.labels.p_from_left + this.labels.p_from_fake >=
            this.labels.p_to_left
              ? ((this.$cache.from[0].style.visibility = "hidden"),
                (this.$cache.to[0].style.visibility = "hidden"),
                (this.$cache.single[0].style.visibility = "visible"),
                (l =
                  this.result.from === this.result.to
                    ? ("from" === this.target
                        ? (this.$cache.from[0].style.visibility = "visible")
                        : "to" === this.target
                        ? (this.$cache.to[0].style.visibility = "visible")
                        : this.target ||
                          (this.$cache.from[0].style.visibility = "visible"),
                      (this.$cache.single[0].style.visibility = "hidden"),
                      c)
                    : ((this.$cache.from[0].style.visibility = "hidden"),
                      (this.$cache.to[0].style.visibility = "hidden"),
                      (this.$cache.single[0].style.visibility = "visible"),
                      Math.max(a, c))))
              : ((this.$cache.from[0].style.visibility = "visible"),
                (this.$cache.to[0].style.visibility = "visible"),
                (this.$cache.single[0].style.visibility = "hidden")),
              n < this.labels.p_min + 1
                ? (this.$cache.min[0].style.visibility = "hidden")
                : (this.$cache.min[0].style.visibility = "visible"),
              l > 100 - this.labels.p_max - 1
                ? (this.$cache.max[0].style.visibility = "hidden")
                : (this.$cache.max[0].style.visibility = "visible");
          }
      }
    },
    drawShadow: function () {
      var t,
        i,
        s,
        o,
        e = this.options,
        h = this.$cache,
        r = "number" == typeof e.from_min && !isNaN(e.from_min),
        n = "number" == typeof e.from_max && !isNaN(e.from_max),
        a = "number" == typeof e.to_min && !isNaN(e.to_min),
        c = "number" == typeof e.to_max && !isNaN(e.to_max);
      "single" === e.type
        ? e.from_shadow && (r || n)
          ? ((t = this.convertToPercent(r ? e.from_min : e.min)),
            (i = this.convertToPercent(n ? e.from_max : e.max) - t),
            (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
            (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
            (t += this.coords.p_handle / 2),
            (h.shad_single[0].style.display = "block"),
            (h.shad_single[0].style.left = t + "%"),
            (h.shad_single[0].style.width = i + "%"))
          : (h.shad_single[0].style.display = "none")
        : (e.from_shadow && (r || n)
            ? ((t = this.convertToPercent(r ? e.from_min : e.min)),
              (i = this.convertToPercent(n ? e.from_max : e.max) - t),
              (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
              (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
              (t += this.coords.p_handle / 2),
              (h.shad_from[0].style.display = "block"),
              (h.shad_from[0].style.left = t + "%"),
              (h.shad_from[0].style.width = i + "%"))
            : (h.shad_from[0].style.display = "none"),
          e.to_shadow && (a || c)
            ? ((s = this.convertToPercent(a ? e.to_min : e.min)),
              (o = this.convertToPercent(c ? e.to_max : e.max) - s),
              (s = this.toFixed(s - (this.coords.p_handle / 100) * s)),
              (o = this.toFixed(o - (this.coords.p_handle / 100) * o)),
              (s += this.coords.p_handle / 2),
              (h.shad_to[0].style.display = "block"),
              (h.shad_to[0].style.left = s + "%"),
              (h.shad_to[0].style.width = o + "%"))
            : (h.shad_to[0].style.display = "none"));
    },
    writeToInput: function () {
      "single" === this.options.type
        ? (this.options.values.length
            ? this.$cache.input.prop("value", this.result.from_value)
            : this.$cache.input.prop("value", this.result.from),
          this.$cache.input.data("from", this.result.from))
        : (this.options.values.length
            ? this.$cache.input.prop(
                "value",
                this.result.from_value +
                  this.options.input_values_separator +
                  this.result.to_value
              )
            : this.$cache.input.prop(
                "value",
                this.result.from +
                  this.options.input_values_separator +
                  this.result.to
              ),
          this.$cache.input.data("from", this.result.from),
          this.$cache.input.data("to", this.result.to));
    },
    callOnStart: function () {
      this.writeToInput(),
        this.options.onStart &&
          "function" == typeof this.options.onStart &&
          (this.options.scope
            ? this.options.onStart.call(this.options.scope, this.result)
            : this.options.onStart(this.result));
    },
    callOnChange: function () {
      this.writeToInput(),
        this.options.onChange &&
          "function" == typeof this.options.onChange &&
          (this.options.scope
            ? this.options.onChange.call(this.options.scope, this.result)
            : this.options.onChange(this.result));
    },
    callOnFinish: function () {
      this.writeToInput(),
        this.options.onFinish &&
          "function" == typeof this.options.onFinish &&
          (this.options.scope
            ? this.options.onFinish.call(this.options.scope, this.result)
            : this.options.onFinish(this.result));
    },
    callOnUpdate: function () {
      this.writeToInput(),
        this.options.onUpdate &&
          "function" == typeof this.options.onUpdate &&
          (this.options.scope
            ? this.options.onUpdate.call(this.options.scope, this.result)
            : this.options.onUpdate(this.result));
    },
    toggleInput: function () {
      this.$cache.input.toggleClass("irs-hidden-input"),
        this.has_tab_index
          ? this.$cache.input.prop("tabindex", -1)
          : this.$cache.input.removeProp("tabindex"),
        (this.has_tab_index = !this.has_tab_index);
    },
    convertToPercent: function (t, i) {
      var s,
        o = this.options.max - this.options.min,
        e = o / 100;
      return o
        ? ((s = (i ? t : t - this.options.min) / e), this.toFixed(s))
        : ((this.no_diapason = !0), 0);
    },
    convertToValue: function (t) {
      var i,
        s,
        o = this.options.min,
        e = this.options.max,
        h = o.toString().split(".")[1],
        r = e.toString().split(".")[1],
        n = 0,
        a = 0;
      if (0 === t) return this.options.min;
      if (100 === t) return this.options.max;
      h && (n = i = h.length),
        r && (n = s = r.length),
        i && s && (n = s <= i ? i : s),
        o < 0 &&
          ((o = +(o + (a = Math.abs(o))).toFixed(n)),
          (e = +(e + a).toFixed(n)));
      var c,
        l = ((e - o) / 100) * t + o,
        _ = this.options.step.toString().split(".")[1];
      return (
        (l = _
          ? +l.toFixed(_.length)
          : ((l /= this.options.step), +(l *= this.options.step).toFixed(0))),
        a && (l -= a),
        (c = _ ? +l.toFixed(_.length) : this.toFixed(l)) < this.options.min
          ? (c = this.options.min)
          : c > this.options.max && (c = this.options.max),
        c
      );
    },
    calcWithStep: function (t) {
      var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
      return 100 < i && (i = 100), 100 === t && (i = 100), this.toFixed(i);
    },
    checkMinInterval: function (t, i, s) {
      var o,
        e,
        h = this.options;
      return h.min_interval
        ? ((o = this.convertToValue(t)),
          (e = this.convertToValue(i)),
          "from" === s
            ? e - o < h.min_interval && (o = e - h.min_interval)
            : o - e < h.min_interval && (o = e + h.min_interval),
          this.convertToPercent(o))
        : t;
    },
    checkMaxInterval: function (t, i, s) {
      var o,
        e,
        h = this.options;
      return h.max_interval
        ? ((o = this.convertToValue(t)),
          (e = this.convertToValue(i)),
          "from" === s
            ? e - o > h.max_interval && (o = e - h.max_interval)
            : o - e > h.max_interval && (o = e + h.max_interval),
          this.convertToPercent(o))
        : t;
    },
    checkDiapason: function (t, i, s) {
      var o = this.convertToValue(t),
        e = this.options;
      return (
        "number" != typeof i && (i = e.min),
        "number" != typeof s && (s = e.max),
        o < i && (o = i),
        s < o && (o = s),
        this.convertToPercent(o)
      );
    },
    toFixed: function (t) {
      return +(t = t.toFixed(20));
    },
    _prettify: function (t) {
      return this.options.prettify_enabled
        ? this.options.prettify && "function" == typeof this.options.prettify
          ? this.options.prettify(t)
          : this.prettify(t)
        : t;
    },
    prettify: function (t) {
      return t
        .toString()
        .replace(
          /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
          "$1" + this.options.prettify_separator
        );
    },
    checkEdges: function (t, i) {
      return (
        this.options.force_edges &&
          (t < 0 ? (t = 0) : 100 - i < t && (t = 100 - i)),
        this.toFixed(t)
      );
    },
    validate: function () {
      var t,
        i,
        s = this.options,
        o = this.result,
        e = s.values,
        h = e.length;
      if (
        ("string" == typeof s.min && (s.min = +s.min),
        "string" == typeof s.max && (s.max = +s.max),
        "string" == typeof s.from && (s.from = +s.from),
        "string" == typeof s.to && (s.to = +s.to),
        "string" == typeof s.step && (s.step = +s.step),
        "string" == typeof s.from_min && (s.from_min = +s.from_min),
        "string" == typeof s.from_max && (s.from_max = +s.from_max),
        "string" == typeof s.to_min && (s.to_min = +s.to_min),
        "string" == typeof s.to_max && (s.to_max = +s.to_max),
        "string" == typeof s.grid_num && (s.grid_num = +s.grid_num),
        s.max < s.min && (s.max = s.min),
        h)
      )
        for (
          s.p_values = [],
            s.min = 0,
            s.max = h - 1,
            s.step = 1,
            s.grid_num = s.max,
            s.grid_snap = !0,
            i = 0;
          i < h;
          i++
        )
          (t = +e[i]),
            (t = isNaN(t) ? e[i] : ((e[i] = t), this._prettify(t))),
            s.p_values.push(t);
      ("number" == typeof s.from && !isNaN(s.from)) || (s.from = s.min),
        ("number" == typeof s.to && !isNaN(s.to)) || (s.to = s.max),
        "single" === s.type
          ? (s.from < s.min && (s.from = s.min),
            s.from > s.max && (s.from = s.max))
          : (s.from < s.min && (s.from = s.min),
            s.from > s.max && (s.from = s.max),
            s.to < s.min && (s.to = s.min),
            s.to > s.max && (s.to = s.max),
            this.update_check.from &&
              (this.update_check.from !== s.from &&
                s.from > s.to &&
                (s.from = s.to),
              this.update_check.to !== s.to &&
                s.to < s.from &&
                (s.to = s.from)),
            s.from > s.to && (s.from = s.to),
            s.to < s.from && (s.to = s.from)),
        ("number" != typeof s.step || isNaN(s.step) || !s.step || s.step < 0) &&
          (s.step = 1),
        "number" == typeof s.from_min &&
          s.from < s.from_min &&
          (s.from = s.from_min),
        "number" == typeof s.from_max &&
          s.from > s.from_max &&
          (s.from = s.from_max),
        "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min),
        "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max),
        o &&
          (o.min !== s.min && (o.min = s.min),
          o.max !== s.max && (o.max = s.max),
          (o.from < o.min || o.from > o.max) && (o.from = s.from),
          (o.to < o.min || o.to > o.max) && (o.to = s.to)),
        ("number" != typeof s.min_interval ||
          isNaN(s.min_interval) ||
          !s.min_interval ||
          s.min_interval < 0) &&
          (s.min_interval = 0),
        ("number" != typeof s.max_interval ||
          isNaN(s.max_interval) ||
          !s.max_interval ||
          s.max_interval < 0) &&
          (s.max_interval = 0),
        s.min_interval &&
          s.min_interval > s.max - s.min &&
          (s.min_interval = s.max - s.min),
        s.max_interval &&
          s.max_interval > s.max - s.min &&
          (s.max_interval = s.max - s.min);
    },
    decorate: function (t, i) {
      var s = "",
        o = this.options;
      return (
        o.prefix && (s += o.prefix),
        (s += t),
        o.max_postfix &&
          (o.values.length && t === o.p_values[o.max]
            ? ((s += o.max_postfix), o.postfix && (s += " "))
            : i === o.max && ((s += o.max_postfix), o.postfix && (s += " "))),
        o.postfix && (s += o.postfix),
        s
      );
    },
    updateFrom: function () {
      (this.result.from = this.options.from),
        (this.result.from_percent = this.convertToPercent(this.result.from)),
        (this.result.from_pretty = this._prettify(this.result.from)),
        this.options.values &&
          (this.result.from_value = this.options.values[this.result.from]);
    },
    updateTo: function () {
      (this.result.to = this.options.to),
        (this.result.to_percent = this.convertToPercent(this.result.to)),
        (this.result.to_pretty = this._prettify(this.result.to)),
        this.options.values &&
          (this.result.to_value = this.options.values[this.result.to]);
    },
    updateResult: function () {
      (this.result.min = this.options.min),
        (this.result.max = this.options.max),
        this.updateFrom(),
        this.updateTo();
    },
    appendGrid: function () {
      if (this.options.grid) {
        var t,
          i,
          s,
          o,
          e,
          h,
          r = this.options,
          n = r.max - r.min,
          a = r.grid_num,
          c = 0,
          l = 4,
          _ = "";
        for (
          this.calcGridMargin(),
            r.grid_snap && (a = n / r.step),
            50 < a && (a = 50),
            s = this.toFixed(100 / a),
            4 < a && (l = 3),
            7 < a && (l = 2),
            14 < a && (l = 1),
            28 < a && (l = 0),
            t = 0;
          t < a + 1;
          t++
        ) {
          for (
            o = l,
              100 < (c = this.toFixed(s * t)) && (c = 100),
              e = ((this.coords.big[t] = c) - s * (t - 1)) / (o + 1),
              i = 1;
            i <= o && 0 !== c;
            i++
          )
            _ +=
              '<span class="irs-grid-pol small" style="left: ' +
              this.toFixed(c - e * i) +
              '%"></span>';
          (_ += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>'),
            (h = this.convertToValue(c)),
            (_ +=
              '<span class="irs-grid-text js-grid-text-' +
              t +
              '" style="left: ' +
              c +
              '%">' +
              (h = r.values.length ? r.p_values[h] : this._prettify(h)) +
              "</span>");
        }
        (this.coords.big_num = Math.ceil(a + 1)),
          this.$cache.cont.addClass("irs-with-grid"),
          this.$cache.grid.html(_),
          this.cacheGridLabels();
      }
    },
    cacheGridLabels: function () {
      var t,
        i,
        s = this.coords.big_num;
      for (i = 0; i < s; i++)
        (t = this.$cache.grid.find(".js-grid-text-" + i)),
          this.$cache.grid_labels.push(t);
      this.calcGridLabels();
    },
    calcGridLabels: function () {
      var t,
        i,
        s = [],
        o = [],
        e = this.coords.big_num;
      for (t = 0; t < e; t++)
        (this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1)),
          (this.coords.big_p[t] = this.toFixed(
            (this.coords.big_w[t] / this.coords.w_rs) * 100
          )),
          (this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2)),
          (s[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t])),
          (o[t] = this.toFixed(s[t] + this.coords.big_p[t]));
      for (
        this.options.force_edges &&
          (s[0] < -this.coords.grid_gap &&
            ((s[0] = -this.coords.grid_gap),
            (o[0] = this.toFixed(s[0] + this.coords.big_p[0])),
            (this.coords.big_x[0] = this.coords.grid_gap)),
          o[e - 1] > 100 + this.coords.grid_gap &&
            ((o[e - 1] = 100 + this.coords.grid_gap),
            (s[e - 1] = this.toFixed(o[e - 1] - this.coords.big_p[e - 1])),
            (this.coords.big_x[e - 1] = this.toFixed(
              this.coords.big_p[e - 1] - this.coords.grid_gap
            )))),
          this.calcGridCollision(2, s, o),
          this.calcGridCollision(4, s, o),
          t = 0;
        t < e;
        t++
      )
        (i = this.$cache.grid_labels[t][0]),
          this.coords.big_x[t] !== Number.POSITIVE_INFINITY &&
            (i.style.marginLeft = -this.coords.big_x[t] + "%");
    },
    calcGridCollision: function (t, i, s) {
      var o,
        e,
        h,
        r = this.coords.big_num;
      for (o = 0; o < r && !(r <= (e = o + t / 2)); o += t)
        (h = this.$cache.grid_labels[e][0]),
          s[o] <= i[e]
            ? (h.style.visibility = "visible")
            : (h.style.visibility = "hidden");
    },
    calcGridMargin: function () {
      this.options.grid_margin &&
        ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
        this.coords.w_rs &&
          ("single" === this.options.type
            ? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1))
            : (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
          (this.coords.p_handle = this.toFixed(
            (this.coords.w_handle / this.coords.w_rs) * 100
          )),
          (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
          (this.$cache.grid[0].style.width =
            this.toFixed(100 - this.coords.p_handle) + "%"),
          (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
    },
    update: function (t) {
      this.input &&
        ((this.is_update = !0),
        (this.options.from = this.result.from),
        (this.options.to = this.result.to),
        (this.update_check.from = this.result.from),
        (this.update_check.to = this.result.to),
        (this.options = a.extend(this.options, t)),
        this.validate(),
        this.updateResult(t),
        this.toggleInput(),
        this.remove(),
        this.init(!0));
    },
    reset: function () {
      this.input && (this.updateResult(), this.update());
    },
    destroy: function () {
      this.input &&
        (this.toggleInput(),
        this.$cache.input.prop("readonly", !1),
        a.data(this.input, "ionRangeSlider", null),
        this.remove(),
        (this.input = null),
        (this.options = null));
    },
  }),
    (a.fn.ionRangeSlider = function (t) {
      return this.each(function () {
        a.data(this, "ionRangeSlider") ||
          a.data(this, "ionRangeSlider", new h(this, t, o++));
      });
    }),
    (function () {
      for (
        var h = 0, t = ["ms", "moz", "webkit", "o"], i = 0;
        i < t.length && !l.requestAnimationFrame;
        ++i
      )
        (l.requestAnimationFrame = l[t[i] + "RequestAnimationFrame"]),
          (l.cancelAnimationFrame =
            l[t[i] + "CancelAnimationFrame"] ||
            l[t[i] + "CancelRequestAnimationFrame"]);
      l.requestAnimationFrame ||
        (l.requestAnimationFrame = function (t, i) {
          var s = new Date().getTime(),
            o = Math.max(0, 16 - (s - h)),
            e = l.setTimeout(function () {
              t(s + o);
            }, o);
          return (h = s + o), e;
        }),
        l.cancelAnimationFrame ||
          (l.cancelAnimationFrame = function (t) {
            clearTimeout(t);
          });
    })();
});

/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ("function" == typeof define && define.amd)
    define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    );
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent("CustomEvent")),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent("on" + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent("on" + b, c)
      : delete a[b];
  }
  function k() {
    return "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: !0 });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: "get",
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: "set",
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l =
        (function () {
          function a() {
            c(this, a),
              "undefined" != typeof console &&
                null !== console &&
                (console.warn(
                  "MutationObserver is not supported by your browser."
                ),
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                ));
          }
          return n(a, [{ key: "observe", value: function () {} }]), a;
        })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            "float" === c && (c = "styleFloat"),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : i(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll("." + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  i(window, "resize", this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, { childList: !0, subtree: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (a) {
              if (
                (("undefined" != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a;
                for (
                  var b = a.querySelectorAll("." + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, "animationend", this.resetAnimation),
                  i(a, "oanimationend", this.resetAnimation),
                  i(a, "webkitAnimationEnd", this.resetAnimation),
                  i(a, "MSAnimationEnd", this.resetAnimation)),
                a
              );
            },
          },
          {
            key: "applyStyle",
            value: function (a, b) {
              var c = this,
                d = a.getAttribute("data-wow-duration"),
                e = a.getAttribute("data-wow-delay"),
                f = a.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = "visible";
              }
            },
          },
          {
            key: "resetAnimation",
            value: function (a) {
              if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className
                  .replace(this.config.animateClass, "")
                  .trim();
              }
            },
          },
          {
            key: "customStyle",
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? "hidden" : "visible"),
                c && this.vendorSet(a.style, { animationDuration: c }),
                d && this.vendorSet(a.style, { animationDelay: d }),
                e && this.vendorSet(a.style, { animationIterationCount: e }),
                this.vendorSet(a.style, {
                  animationName: b ? "none" : this.cachedAnimationName(a),
                }),
                a
              );
            },
          },
          {
            key: "vendorSet",
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a["" + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
              }
              return d;
            },
          },
          {
            key: "animationName",
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, "animation-name").cssText;
              } catch (c) {
                b = q(a).getPropertyValue("animation-name");
              }
              return "none" === b ? "" : b;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: "isVisible",
            value: function (a) {
              var b = a.getAttribute("data-wow-offset") || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: "disabled",
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b["default"] = r), (a.exports = b["default"]);
});
/*[uLineUp]*/
// Author: Forwebdevs
// Website: https://forwebdevs.com/uLineUp/
// License: https://forwebdevs.com/uLineUp/license/
// Version: 1.0.0
(function () {
  function uLineUp(q, p) {
    return new uLineUp_fn(q, p);
  }
  function uLineUp_fn(q, p) {
    var _this = this;
    _this.data = { elems: [], query: q };
    _this.data.opt_d = {
      resize: false,
      init: function () {},
      before: function () {},
      eachBefore: function () {},
      complete: function () {},
      eachComplete: function () {},
    };
    _this.data.opt_c = p;
    _this.data.opt = extend(_this.data.opt_d, _this.data.opt_c);
    _this.data.elems = get(q);
    _this.start = function () {
      var opt = _this.data.opt;
      var elems = get(_this.data.query);
      _this.data.elems = elems;
      opt.before.apply(_this, [elems]);
      if (elems.length) {
        each(elems, function (i, o) {
          if (!o.uLineUp_height_orig) {
            o.uLineUp_height_orig = o.style.height;
          }
          css(o, { height: "auto" });
          o.uLineUp_linedUp = 0;
        });
        var n = 0;
        function f() {
          var arr = [],
            hs = 0,
            ts = 0;
          each(elems, function (i, o) {
            if (o.uLineUp_linedUp) {
              return "continue";
            }
            var r = o.getBoundingClientRect(),
              t = r.top,
              b = r.bottom,
              h =
                b -
                t -
                (parseInt(css(o, "border-top-width")) +
                  parseInt(css(o, "border-bottom-width")) +
                  parseInt(css(o, "padding-top")) +
                  parseInt(css(o, "padding-bottom")));
            if (!opt.sameSize && t != ts) {
              if (arr.length) {
                each(arr, function (i, o) {
                  opt.eachBefore.apply(_this, [n, o]);
                  css(o, { height: hs + "px" });
                  o.uLineUp_linedUp = 1;
                  opt.eachComplete.apply(_this, [n, o]);
                  n++;
                });
                f();
                return "break";
              }
            }
            arr.push(o);
            hs = Math.max(hs, h);
            ts = t;
          });
          each(arr, function (i, o) {
            if (o.uLineUp_linedUp) {
              return "continue";
            }
            opt.eachBefore.apply(_this, [n, o]);
            css(o, { height: hs + "px" });
            o.uLineUp_linedUp = 1;
            opt.eachComplete.apply(_this, [n, o]);
            n++;
          });
        }
        f();
      }
      opt.complete.apply(_this, [elems]);
    };
    _this.data.opt.init.apply(_this, [_this.data.elems]);
    _this.start();
    window.addEventListener("resize", function () {
      if (_this.data.opt.resize) {
        _this.start();
      }
    });
    return _this;
  }
  function extend() {
    var r = {},
      arg = arguments,
      l = arg.length,
      b = 1;
    if ([1, 0, true, false].indexOf(arg[l - 1]) != -1) {
      b = arg[l - 1];
    }
    for (var a = 0; a < l; a++) {
      for (var k in arg[a]) {
        if (
          b &&
          r[k] &&
          typeof r[k] == "object" &&
          !Array.isArray(r[k]) &&
          typeof arg[a][k] == "object" &&
          !Array.isArray(arg[a][k])
        ) {
          r[k] = extend(r[k], arg[a][k]);
        } else {
          r[k] = arg[a][k];
        }
      }
    }
    return r;
  }
  function get(q) {
    var elems = [];
    if (q) {
      if (typeof q == "string") {
        elems = document.querySelectorAll(q);
      } else if (q.nodeName) {
        elems = [q];
      } else if (typeof q == "object" && q.length) {
        elems = q;
      }
    }
    return elems;
  }
  function css(o, s) {
    if (typeof s == "string") {
      var r = getComputedStyle(o)[s];
      if (r) {
        if (r.match(/^[0-9\-\.]+(px)+$/gi) || r.match(/^[0-9\-\.]+$/gi)) {
          r = parseInt(r);
        }
      }
      return r;
    }
    if (typeof s == "object") {
      for (var n in s) {
        o.style[n] = s[n];
      }
    }
  }
  function each(elems, f) {
    if (elems && elems.length) {
      for (var i = 0; i < elems.length; i++) {
        var r = f.apply(elems[i], [i, elems[i]]);
        if (r == "continue") {
          continue;
        }
        if (r == "break") {
          break;
        }
      }
    }
  }
  uLineUp_fn.prototype.set = function (p) {
    var _this = this;
    _this.data.opt = extend(_this.data.opt_d, _this.data.opt_c, p);
    return _this;
  };
  uLineUp_fn.prototype.update = function (p) {
    var _this = this;
    _this.start();
    return _this;
  };
  uLineUp_fn.prototype.destroy = function (p) {
    var _this = this;
    each(_this.data.elems, function (i, o) {
      if (o.uLineUp_linedUp) {
        o.style.height = o.uLineUp_height_orig;
        if (!o.getAttribute("style")) {
          o.removeAttribute("style");
        }
        delete o.uLineUp_height_orig;
        delete o.uLineUp_linedUp;
      }
      delete o.uLineUp;
    });
    _this = null;
  };
  window.uLineUp = uLineUp;
})();
/*[/uLineUp]*/
/*[datepicker]*/
/*
http://t1m0n.name/air-datepicker/docs/index-ru.html
https://github.com/t1m0n/air-datepicker/tree/master/dist
*/
!(function (t, e, i) {
  !(function () {
    var s,
      a,
      n,
      h = "2.2.2",
      o = "datepicker",
      r = ".datepicker-here",
      c = !1,
      d =
        '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
      l = {
        classes: "",
        inline: !1,
        language: "ru",
        startDate: new Date(),
        firstDay: "",
        weekends: [6, 0],
        dateFormat: "",
        altField: "",
        altFieldDateFormat: "@",
        toggleSelected: !0,
        keyboardNav: !0,
        position: "bottom left",
        offset: 12,
        view: "days",
        minView: "days",
        showOtherMonths: !0,
        selectOtherMonths: !0,
        moveToOtherMonthsOnSelect: !0,
        showOtherYears: !0,
        selectOtherYears: !0,
        moveToOtherYearsOnSelect: !0,
        minDate: "",
        maxDate: "",
        disableNavWhenOutOfRange: !0,
        multipleDates: !1,
        multipleDatesSeparator: ",",
        range: !1,
        dragRange: !0,
        todayButton: !1,
        clearButton: !1,
        showEvent: "focus",
        autoClose: !1,
        monthsField: "monthsShort",
        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
        navTitles: {
          days: "MM, <i>yyyy</i>",
          months: "yyyy",
          years: "yyyy1 - yyyy2",
        },
        timepicker: !1,
        onlyTimepicker: !1,
        dateTimeSeparator: " ",
        timeFormat: "",
        minHours: 0,
        maxHours: 24,
        minMinutes: 0,
        maxMinutes: 59,
        hoursStep: 1,
        minutesStep: 1,
        onSelect: "",
        onShow: "",
        onHide: "",
        onChangeMonth: "",
        onChangeYear: "",
        onChangeDecade: "",
        onChangeView: "",
        onRenderCell: "",
      },
      u = {
        ctrlRight: [17, 39],
        ctrlUp: [17, 38],
        ctrlLeft: [17, 37],
        ctrlDown: [17, 40],
        shiftRight: [16, 39],
        shiftUp: [16, 38],
        shiftLeft: [16, 37],
        shiftDown: [16, 40],
        altUp: [18, 38],
        altRight: [18, 39],
        altLeft: [18, 37],
        altDown: [18, 40],
        ctrlShiftUp: [16, 17, 38],
      },
      m = function (t, a) {
        (this.el = t),
          (this.$el = e(t)),
          (this.opts = e.extend(!0, {}, l, a, this.$el.data())),
          s == i && (s = e("body")),
          this.opts.startDate || (this.opts.startDate = new Date()),
          "INPUT" == this.el.nodeName && (this.elIsInput = !0),
          this.opts.altField &&
            (this.$altField =
              "string" == typeof this.opts.altField
                ? e(this.opts.altField)
                : this.opts.altField),
          (this.inited = !1),
          (this.visible = !1),
          (this.silent = !1),
          (this.currentDate = this.opts.startDate),
          (this.currentView = this.opts.view),
          this._createShortCuts(),
          (this.selectedDates = []),
          (this.views = {}),
          (this.keys = []),
          (this.minRange = ""),
          (this.maxRange = ""),
          (this._prevOnSelectValue = ""),
          this.init();
      };
    (n = m),
      (n.prototype = {
        VERSION: h,
        viewIndexes: ["days", "months", "years"],
        init: function () {
          c ||
            this.opts.inline ||
            !this.elIsInput ||
            this._buildDatepickersContainer(),
            this._buildBaseHtml(),
            this._defineLocale(this.opts.language),
            this._syncWithMinMaxDates(),
            this.elIsInput &&
              (this.opts.inline ||
                (this._setPositionClasses(this.opts.position),
                this._bindEvents()),
              this.opts.keyboardNav &&
                !this.opts.onlyTimepicker &&
                this._bindKeyboardEvents(),
              this.$datepicker.on(
                "mousedown",
                this._onMouseDownDatepicker.bind(this)
              ),
              this.$datepicker.on(
                "mouseup",
                this._onMouseUpDatepicker.bind(this)
              )),
            this.opts.classes && this.$datepicker.addClass(this.opts.classes),
            this.opts.timepicker &&
              ((this.timepicker = new e.fn.datepicker.Timepicker(
                this,
                this.opts
              )),
              this._bindTimepickerEvents()),
            this.opts.onlyTimepicker &&
              this.$datepicker.addClass("-only-timepicker-"),
            (this.views[this.currentView] = new e.fn.datepicker.Body(
              this,
              this.currentView,
              this.opts
            )),
            this.views[this.currentView].show(),
            (this.nav = new e.fn.datepicker.Navigation(this, this.opts)),
            (this.view = this.currentView),
            this.$el.on("clickCell.adp", this._onClickCell.bind(this)),
            this.$datepicker.on(
              "mouseenter",
              ".datepicker--cell",
              this._onMouseEnterCell.bind(this)
            ),
            this.$datepicker.on(
              "mouseleave",
              ".datepicker--cell",
              this._onMouseLeaveCell.bind(this)
            ),
            (this.inited = !0);
        },
        _createShortCuts: function () {
          (this.minDate = this.opts.minDate
            ? this.opts.minDate
            : new Date(-86399999136e5)),
            (this.maxDate = this.opts.maxDate
              ? this.opts.maxDate
              : new Date(86399999136e5));
        },
        _bindEvents: function () {
          this.$el.on(
            this.opts.showEvent + ".adp",
            this._onShowEvent.bind(this)
          ),
            this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)),
            this.$el.on("blur.adp", this._onBlur.bind(this)),
            this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)),
            e(t).on("resize.adp", this._onResize.bind(this)),
            e("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
        },
        _bindKeyboardEvents: function () {
          this.$el.on("keydown.adp", this._onKeyDown.bind(this)),
            this.$el.on("keyup.adp", this._onKeyUp.bind(this)),
            this.$el.on("hotKey.adp", this._onHotKey.bind(this));
        },
        _bindTimepickerEvents: function () {
          this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
        },
        isWeekend: function (t) {
          return -1 !== this.opts.weekends.indexOf(t);
        },
        _defineLocale: function (t) {
          "string" == typeof t
            ? ((this.loc = e.fn.datepicker.language[t]),
              this.loc ||
                (console.warn(
                  "Can't find language \"" +
                    t +
                    '" in Datepicker.language, will use "ru" instead'
                ),
                (this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru))),
              (this.loc = e.extend(
                !0,
                {},
                e.fn.datepicker.language.ru,
                e.fn.datepicker.language[t]
              )))
            : (this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t)),
            this.opts.dateFormat &&
              (this.loc.dateFormat = this.opts.dateFormat),
            this.opts.timeFormat &&
              (this.loc.timeFormat = this.opts.timeFormat),
            "" !== this.opts.firstDay &&
              (this.loc.firstDay = this.opts.firstDay),
            this.opts.timepicker &&
              (this.loc.dateFormat = [
                this.loc.dateFormat,
                this.loc.timeFormat,
              ].join(this.opts.dateTimeSeparator)),
            this.opts.onlyTimepicker &&
              (this.loc.dateFormat = this.loc.timeFormat);
          var i = this._getWordBoundaryRegExp;
          (this.loc.timeFormat.match(i("aa")) ||
            this.loc.timeFormat.match(i("AA"))) &&
            (this.ampm = !0);
        },
        _buildDatepickersContainer: function () {
          (c = !0),
            s.append(
              '<div class="datepickers-container" id="datepickers-container"></div>'
            ),
            (a = e("#datepickers-container"));
        },
        _buildBaseHtml: function () {
          var t,
            i = e('<div class="datepicker-inline">');
          (t =
            "INPUT" == this.el.nodeName
              ? this.opts.inline
                ? i.insertAfter(this.$el)
                : a
              : i.appendTo(this.$el)),
            (this.$datepicker = e(d).appendTo(t)),
            (this.$content = e(".datepicker--content", this.$datepicker)),
            (this.$nav = e(".datepicker--nav", this.$datepicker));
        },
        _triggerOnChange: function () {
          if (!this.selectedDates.length) {
            if ("" === this._prevOnSelectValue) return;
            return (
              (this._prevOnSelectValue = ""), this.opts.onSelect("", "", this)
            );
          }
          var t,
            e = this.selectedDates,
            i = n.getParsedDate(e[0]),
            s = this,
            a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
          (t = e
            .map(function (t) {
              return s.formatDate(s.loc.dateFormat, t);
            })
            .join(this.opts.multipleDatesSeparator)),
            (this.opts.multipleDates || this.opts.range) &&
              (a = e.map(function (t) {
                var e = n.getParsedDate(t);
                return new Date(e.year, e.month, e.date, e.hours, e.minutes);
              })),
            (this._prevOnSelectValue = t),
            this.opts.onSelect(t, a, this);
        },
        next: function () {
          var t = this.parsedDate,
            e = this.opts;
          switch (this.view) {
            case "days":
              (this.date = new Date(t.year, t.month + 1, 1)),
                e.onChangeMonth &&
                  e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
              break;
            case "months":
              (this.date = new Date(t.year + 1, t.month, 1)),
                e.onChangeYear && e.onChangeYear(this.parsedDate.year);
              break;
            case "years":
              (this.date = new Date(t.year + 10, 0, 1)),
                e.onChangeDecade && e.onChangeDecade(this.curDecade);
          }
        },
        prev: function () {
          var t = this.parsedDate,
            e = this.opts;
          switch (this.view) {
            case "days":
              (this.date = new Date(t.year, t.month - 1, 1)),
                e.onChangeMonth &&
                  e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
              break;
            case "months":
              (this.date = new Date(t.year - 1, t.month, 1)),
                e.onChangeYear && e.onChangeYear(this.parsedDate.year);
              break;
            case "years":
              (this.date = new Date(t.year - 10, 0, 1)),
                e.onChangeDecade && e.onChangeDecade(this.curDecade);
          }
        },
        formatDate: function (t, e) {
          e = e || this.date;
          var i,
            s = t,
            a = this._getWordBoundaryRegExp,
            h = this.loc,
            o = n.getLeadingZeroNum,
            r = n.getDecade(e),
            c = n.getParsedDate(e),
            d = c.fullHours,
            l = c.hours,
            u = t.match(a("aa")) || t.match(a("AA")),
            m = "am",
            p = this._replacer;
          switch (
            (this.opts.timepicker &&
              this.timepicker &&
              u &&
              ((i = this.timepicker._getValidHoursFromDate(e, u)),
              (d = o(i.hours)),
              (l = i.hours),
              (m = i.dayPeriod)),
            !0)
          ) {
            case /@/.test(s):
              s = s.replace(/@/, e.getTime());
            case /aa/.test(s):
              s = p(s, a("aa"), m);
            case /AA/.test(s):
              s = p(s, a("AA"), m.toUpperCase());
            case /dd/.test(s):
              s = p(s, a("dd"), c.fullDate);
            case /d/.test(s):
              s = p(s, a("d"), c.date);
            case /DD/.test(s):
              s = p(s, a("DD"), h.days[c.day]);
            case /D/.test(s):
              s = p(s, a("D"), h.daysShort[c.day]);
            case /mm/.test(s):
              s = p(s, a("mm"), c.fullMonth);
            case /m/.test(s):
              s = p(s, a("m"), c.month + 1);
            case /MM/.test(s):
              s = p(s, a("MM"), this.loc.months[c.month]);
            case /M/.test(s):
              s = p(s, a("M"), h.monthsShort[c.month]);
            case /ii/.test(s):
              s = p(s, a("ii"), c.fullMinutes);
            case /i/.test(s):
              s = p(s, a("i"), c.minutes);
            case /hh/.test(s):
              s = p(s, a("hh"), d);
            case /h/.test(s):
              s = p(s, a("h"), l);
            case /yyyy/.test(s):
              s = p(s, a("yyyy"), c.year);
            case /yyyy1/.test(s):
              s = p(s, a("yyyy1"), r[0]);
            case /yyyy2/.test(s):
              s = p(s, a("yyyy2"), r[1]);
            case /yy/.test(s):
              s = p(s, a("yy"), c.year.toString().slice(-2));
          }
          return s;
        },
        _replacer: function (t, e, i) {
          return t.replace(e, function (t, e, s, a) {
            return e + i + a;
          });
        },
        _getWordBoundaryRegExp: function (t) {
          var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
          return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g");
        },
        selectDate: function (t) {
          var e = this,
            i = e.opts,
            s = e.parsedDate,
            a = e.selectedDates,
            h = a.length,
            o = "";
          if (Array.isArray(t))
            return void t.forEach(function (t) {
              e.selectDate(t);
            });
          if (t instanceof Date) {
            if (
              ((this.lastSelectedDate = t),
              this.timepicker && this.timepicker._setTime(t),
              e._trigger("selectDate", t),
              this.timepicker &&
                (t.setHours(this.timepicker.hours),
                t.setMinutes(this.timepicker.minutes)),
              "days" == e.view &&
                t.getMonth() != s.month &&
                i.moveToOtherMonthsOnSelect &&
                (o = new Date(t.getFullYear(), t.getMonth(), 1)),
              "years" == e.view &&
                t.getFullYear() != s.year &&
                i.moveToOtherYearsOnSelect &&
                (o = new Date(t.getFullYear(), 0, 1)),
              o &&
                ((e.silent = !0),
                (e.date = o),
                (e.silent = !1),
                e.nav._render()),
              i.multipleDates && !i.range)
            ) {
              if (h === i.multipleDates) return;
              e._isSelected(t) || e.selectedDates.push(t);
            } else
              i.range
                ? 2 == h
                  ? ((e.selectedDates = [t]),
                    (e.minRange = t),
                    (e.maxRange = ""))
                  : 1 == h
                  ? (e.selectedDates.push(t),
                    e.maxRange ? (e.minRange = t) : (e.maxRange = t),
                    n.bigger(e.maxRange, e.minRange) &&
                      ((e.maxRange = e.minRange), (e.minRange = t)),
                    (e.selectedDates = [e.minRange, e.maxRange]))
                  : ((e.selectedDates = [t]), (e.minRange = t))
                : (e.selectedDates = [t]);
            e._setInputValue(),
              i.onSelect && e._triggerOnChange(),
              i.autoClose &&
                !this.timepickerIsActive &&
                (i.multipleDates || i.range
                  ? i.range && 2 == e.selectedDates.length && e.hide()
                  : e.hide()),
              e.views[this.currentView]._render();
          }
        },
        removeDate: function (t) {
          var e = this.selectedDates,
            i = this;
          if (t instanceof Date)
            return e.some(function (s, a) {
              return n.isSame(s, t)
                ? (e.splice(a, 1),
                  i.selectedDates.length
                    ? (i.lastSelectedDate =
                        i.selectedDates[i.selectedDates.length - 1])
                    : ((i.minRange = ""),
                      (i.maxRange = ""),
                      (i.lastSelectedDate = "")),
                  i.views[i.currentView]._render(),
                  i._setInputValue(),
                  i.opts.onSelect && i._triggerOnChange(),
                  !0)
                : void 0;
            });
        },
        today: function () {
          (this.silent = !0),
            (this.view = this.opts.minView),
            (this.silent = !1),
            (this.date = new Date()),
            this.opts.todayButton instanceof Date &&
              this.selectDate(this.opts.todayButton);
        },
        clear: function () {
          (this.selectedDates = []),
            (this.minRange = ""),
            (this.maxRange = ""),
            this.views[this.currentView]._render(),
            this._setInputValue(),
            this.opts.onSelect && this._triggerOnChange();
        },
        update: function (t, i) {
          var s = arguments.length,
            a = this.lastSelectedDate;
          return (
            2 == s
              ? (this.opts[t] = i)
              : 1 == s &&
                "object" == typeof t &&
                (this.opts = e.extend(!0, this.opts, t)),
            this._createShortCuts(),
            this._syncWithMinMaxDates(),
            this._defineLocale(this.opts.language),
            this.nav._addButtonsIfNeed(),
            this.opts.onlyTimepicker || this.nav._render(),
            this.views[this.currentView]._render(),
            this.elIsInput &&
              !this.opts.inline &&
              (this._setPositionClasses(this.opts.position),
              this.visible && this.setPosition(this.opts.position)),
            this.opts.classes && this.$datepicker.addClass(this.opts.classes),
            this.opts.onlyTimepicker &&
              this.$datepicker.addClass("-only-timepicker-"),
            this.opts.timepicker &&
              (a && this.timepicker._handleDate(a),
              this.timepicker._updateRanges(),
              this.timepicker._updateCurrentTime(),
              a &&
                (a.setHours(this.timepicker.hours),
                a.setMinutes(this.timepicker.minutes))),
            this._setInputValue(),
            this
          );
        },
        _syncWithMinMaxDates: function () {
          var t = this.date.getTime();
          (this.silent = !0),
            this.minTime > t && (this.date = this.minDate),
            this.maxTime < t && (this.date = this.maxDate),
            (this.silent = !1);
        },
        _isSelected: function (t, e) {
          var i = !1;
          return (
            this.selectedDates.some(function (s) {
              return n.isSame(s, t, e) ? ((i = s), !0) : void 0;
            }),
            i
          );
        },
        _setInputValue: function () {
          var t,
            e = this,
            i = e.opts,
            s = e.loc.dateFormat,
            a = i.altFieldDateFormat,
            n = e.selectedDates.map(function (t) {
              return e.formatDate(s, t);
            });
          i.altField &&
            e.$altField.length &&
            ((t = this.selectedDates.map(function (t) {
              return e.formatDate(a, t);
            })),
            (t = t.join(this.opts.multipleDatesSeparator)),
            this.$altField.val(t)),
            (n = n.join(this.opts.multipleDatesSeparator)),
            this.$el.val(n);
        },
        _isInRange: function (t, e) {
          var i = t.getTime(),
            s = n.getParsedDate(t),
            a = n.getParsedDate(this.minDate),
            h = n.getParsedDate(this.maxDate),
            o = new Date(s.year, s.month, a.date).getTime(),
            r = new Date(s.year, s.month, h.date).getTime(),
            c = {
              day: i >= this.minTime && i <= this.maxTime,
              month: o >= this.minTime && r <= this.maxTime,
              year: s.year >= a.year && s.year <= h.year,
            };
          return e ? c[e] : c.day;
        },
        _getDimensions: function (t) {
          var e = t.offset();
          return {
            width: t.outerWidth(),
            height: t.outerHeight(),
            left: e.left,
            top: e.top,
          };
        },
        _getDateFromCell: function (t) {
          var e = this.parsedDate,
            s = t.data("year") || e.year,
            a = t.data("month") == i ? e.month : t.data("month"),
            n = t.data("date") || 1;
          return new Date(s, a, n);
        },
        _setPositionClasses: function (t) {
          t = t.split(" ");
          var e = t[0],
            i = t[1],
            s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
          this.visible && (s += " active"),
            this.$datepicker.removeAttr("class").addClass(s);
        },
        setPosition: function (t) {
          t = t || this.opts.position;
          var e,
            i,
            s = this._getDimensions(this.$el),
            a = this._getDimensions(this.$datepicker),
            n = t.split(" "),
            h = this.opts.offset,
            o = n[0],
            r = n[1];
          switch (o) {
            case "top":
              e = s.top - a.height - h;
              break;
            case "right":
              i = s.left + s.width + h;
              break;
            case "bottom":
              e = s.top + s.height + h;
              break;
            case "left":
              i = s.left - a.width - h;
          }
          switch (r) {
            case "top":
              e = s.top;
              break;
            case "right":
              i = s.left + s.width - a.width;
              break;
            case "bottom":
              e = s.top + s.height - a.height;
              break;
            case "left":
              i = s.left;
              break;
            case "center":
              /left|right/.test(o)
                ? (e = s.top + s.height / 2 - a.height / 2)
                : (i = s.left + s.width / 2 - a.width / 2);
          }
          this.$datepicker.css({ left: i, top: e });
        },
        show: function () {
          var t = this.opts.onShow;
          this.setPosition(this.opts.position),
            this.$datepicker.addClass("active"),
            (this.visible = !0),
            t && this._bindVisionEvents(t);
        },
        hide: function () {
          var t = this.opts.onHide;
          this.$datepicker.removeClass("active").css({ left: "-100000px" }),
            (this.focused = ""),
            (this.keys = []),
            (this.inFocus = !1),
            (this.visible = !1),
            this.$el.blur(),
            t && this._bindVisionEvents(t);
        },
        down: function (t) {
          this._changeView(t, "down");
        },
        up: function (t) {
          this._changeView(t, "up");
        },
        _bindVisionEvents: function (t) {
          this.$datepicker.off("transitionend.dp"),
            t(this, !1),
            this.$datepicker.one("transitionend.dp", t.bind(this, this, !0));
        },
        _changeView: function (t, e) {
          t = t || this.focused || this.date;
          var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
          i > 2 && (i = 2),
            0 > i && (i = 0),
            (this.silent = !0),
            (this.date = new Date(t.getFullYear(), t.getMonth(), 1)),
            (this.silent = !1),
            (this.view = this.viewIndexes[i]);
        },
        _handleHotKey: function (t) {
          var e,
            i,
            s,
            a = n.getParsedDate(this._getFocusedDate()),
            h = this.opts,
            o = !1,
            r = !1,
            c = !1,
            d = a.year,
            l = a.month,
            u = a.date;
          switch (t) {
            case "ctrlRight":
            case "ctrlUp":
              (l += 1), (o = !0);
              break;
            case "ctrlLeft":
            case "ctrlDown":
              (l -= 1), (o = !0);
              break;
            case "shiftRight":
            case "shiftUp":
              (r = !0), (d += 1);
              break;
            case "shiftLeft":
            case "shiftDown":
              (r = !0), (d -= 1);
              break;
            case "altRight":
            case "altUp":
              (c = !0), (d += 10);
              break;
            case "altLeft":
            case "altDown":
              (c = !0), (d -= 10);
              break;
            case "ctrlShiftUp":
              this.up();
          }
          (s = n.getDaysCount(new Date(d, l))),
            (i = new Date(d, l, u)),
            u > s && (u = s),
            i.getTime() < this.minTime
              ? (i = this.minDate)
              : i.getTime() > this.maxTime && (i = this.maxDate),
            (this.focused = i),
            (e = n.getParsedDate(i)),
            o && h.onChangeMonth && h.onChangeMonth(e.month, e.year),
            r && h.onChangeYear && h.onChangeYear(e.year),
            c && h.onChangeDecade && h.onChangeDecade(this.curDecade);
        },
        _registerKey: function (t) {
          var e = this.keys.some(function (e) {
            return e == t;
          });
          e || this.keys.push(t);
        },
        _unRegisterKey: function (t) {
          var e = this.keys.indexOf(t);
          this.keys.splice(e, 1);
        },
        _isHotKeyPressed: function () {
          var t,
            e = !1,
            i = this,
            s = this.keys.sort();
          for (var a in u)
            (t = u[a]),
              s.length == t.length &&
                t.every(function (t, e) {
                  return t == s[e];
                }) &&
                (i._trigger("hotKey", a), (e = !0));
          return e;
        },
        _trigger: function (t, e) {
          this.$el.trigger(t, e);
        },
        _focusNextCell: function (t, e) {
          e = e || this.cellType;
          var i = n.getParsedDate(this._getFocusedDate()),
            s = i.year,
            a = i.month,
            h = i.date;
          if (!this._isHotKeyPressed()) {
            switch (t) {
              case 37:
                "day" == e ? (h -= 1) : "",
                  "month" == e ? (a -= 1) : "",
                  "year" == e ? (s -= 1) : "";
                break;
              case 38:
                "day" == e ? (h -= 7) : "",
                  "month" == e ? (a -= 3) : "",
                  "year" == e ? (s -= 4) : "";
                break;
              case 39:
                "day" == e ? (h += 1) : "",
                  "month" == e ? (a += 1) : "",
                  "year" == e ? (s += 1) : "";
                break;
              case 40:
                "day" == e ? (h += 7) : "",
                  "month" == e ? (a += 3) : "",
                  "year" == e ? (s += 4) : "";
            }
            var o = new Date(s, a, h);
            o.getTime() < this.minTime
              ? (o = this.minDate)
              : o.getTime() > this.maxTime && (o = this.maxDate),
              (this.focused = o);
          }
        },
        _getFocusedDate: function () {
          var t =
              this.focused || this.selectedDates[this.selectedDates.length - 1],
            e = this.parsedDate;
          if (!t)
            switch (this.view) {
              case "days":
                t = new Date(e.year, e.month, new Date().getDate());
                break;
              case "months":
                t = new Date(e.year, e.month, 1);
                break;
              case "years":
                t = new Date(e.year, 0, 1);
            }
          return t;
        },
        _getCell: function (t, i) {
          i = i || this.cellType;
          var s,
            a = n.getParsedDate(t),
            h = '.datepicker--cell[data-year="' + a.year + '"]';
          switch (i) {
            case "month":
              h = '[data-month="' + a.month + '"]';
              break;
            case "day":
              h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]';
          }
          return (
            (s = this.views[this.currentView].$el.find(h)), s.length ? s : e("")
          );
        },
        destroy: function () {
          var t = this;
          t.$el.off(".adp").data("datepicker", ""),
            (t.selectedDates = []),
            (t.focused = ""),
            (t.views = {}),
            (t.keys = []),
            (t.minRange = ""),
            (t.maxRange = ""),
            t.opts.inline || !t.elIsInput
              ? t.$datepicker.closest(".datepicker-inline").remove()
              : t.$datepicker.remove();
        },
        _handleAlreadySelectedDates: function (t, e) {
          this.opts.range
            ? this.opts.toggleSelected
              ? this.removeDate(e)
              : 2 != this.selectedDates.length && this._trigger("clickCell", e)
            : this.opts.toggleSelected && this.removeDate(e),
            this.opts.toggleSelected ||
              ((this.lastSelectedDate = t),
              this.opts.timepicker &&
                (this.timepicker._setTime(t), this.timepicker.update()));
        },
        _onShowEvent: function (t) {
          this.visible || this.show();
        },
        _onBlur: function () {
          !this.inFocus && this.visible && this.hide();
        },
        _onMouseDownDatepicker: function (t) {
          this.inFocus = !0;
        },
        _onMouseUpDatepicker: function (t) {
          (this.inFocus = !1),
            (t.originalEvent.inFocus = !0),
            t.originalEvent.timepickerFocus || this.$el.focus();
        },
        _onKeyUpGeneral: function (t) {
          var e = this.$el.val();
          e || this.clear();
        },
        _onResize: function () {
          this.visible && this.setPosition();
        },
        _onMouseUpBody: function (t) {
          t.originalEvent.inFocus ||
            (this.visible && !this.inFocus && this.hide());
        },
        _onMouseUpEl: function (t) {
          (t.originalEvent.inFocus = !0),
            setTimeout(this._onKeyUpGeneral.bind(this), 4);
        },
        _onKeyDown: function (t) {
          var e = t.which;
          if (
            (this._registerKey(e),
            e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)),
            13 == e && this.focused)
          ) {
            if (this._getCell(this.focused).hasClass("-disabled-")) return;
            if (this.view != this.opts.minView) this.down();
            else {
              var i = this._isSelected(this.focused, this.cellType);
              if (!i)
                return (
                  this.timepicker &&
                    (this.focused.setHours(this.timepicker.hours),
                    this.focused.setMinutes(this.timepicker.minutes)),
                  void this.selectDate(this.focused)
                );
              this._handleAlreadySelectedDates(i, this.focused);
            }
          }
          27 == e && this.hide();
        },
        _onKeyUp: function (t) {
          var e = t.which;
          this._unRegisterKey(e);
        },
        _onHotKey: function (t, e) {
          this._handleHotKey(e);
        },
        _onMouseEnterCell: function (t) {
          var i = e(t.target).closest(".datepicker--cell"),
            s = this._getDateFromCell(i);
          (this.silent = !0),
            this.focused && (this.focused = ""),
            i.addClass("-focus-"),
            (this.focused = s),
            (this.silent = !1),
            this.opts.range &&
              1 == this.selectedDates.length &&
              ((this.minRange = this.selectedDates[0]),
              (this.maxRange = ""),
              n.less(this.minRange, this.focused) &&
                ((this.maxRange = this.minRange), (this.minRange = "")),
              this.views[this.currentView]._update());
        },
        _onMouseLeaveCell: function (t) {
          var i = e(t.target).closest(".datepicker--cell");
          i.removeClass("-focus-"),
            (this.silent = !0),
            (this.focused = ""),
            (this.silent = !1);
        },
        _onTimeChange: function (t, e, i) {
          var s = new Date(),
            a = this.selectedDates,
            n = !1;
          a.length && ((n = !0), (s = this.lastSelectedDate)),
            s.setHours(e),
            s.setMinutes(i),
            n || this._getCell(s).hasClass("-disabled-")
              ? (this._setInputValue(),
                this.opts.onSelect && this._triggerOnChange())
              : this.selectDate(s);
        },
        _onClickCell: function (t, e) {
          this.timepicker &&
            (e.setHours(this.timepicker.hours),
            e.setMinutes(this.timepicker.minutes)),
            this.selectDate(e);
        },
        set focused(t) {
          if (!t && this.focused) {
            var e = this._getCell(this.focused);
            e.length && e.removeClass("-focus-");
          }
          (this._focused = t),
            this.opts.range &&
              1 == this.selectedDates.length &&
              ((this.minRange = this.selectedDates[0]),
              (this.maxRange = ""),
              n.less(this.minRange, this._focused) &&
                ((this.maxRange = this.minRange), (this.minRange = ""))),
            this.silent || (this.date = t);
        },
        get focused() {
          return this._focused;
        },
        get parsedDate() {
          return n.getParsedDate(this.date);
        },
        set date(t) {
          return t instanceof Date
            ? ((this.currentDate = t),
              this.inited &&
                !this.silent &&
                (this.views[this.view]._render(),
                this.nav._render(),
                this.visible && this.elIsInput && this.setPosition()),
              t)
            : void 0;
        },
        get date() {
          return this.currentDate;
        },
        set view(t) {
          return (
            (this.viewIndex = this.viewIndexes.indexOf(t)),
            this.viewIndex < 0
              ? void 0
              : ((this.prevView = this.currentView),
                (this.currentView = t),
                this.inited &&
                  (this.views[t]
                    ? this.views[t]._render()
                    : (this.views[t] = new e.fn.datepicker.Body(
                        this,
                        t,
                        this.opts
                      )),
                  this.views[this.prevView].hide(),
                  this.views[t].show(),
                  this.nav._render(),
                  this.opts.onChangeView && this.opts.onChangeView(t),
                  this.elIsInput && this.visible && this.setPosition()),
                t)
          );
        },
        get view() {
          return this.currentView;
        },
        get cellType() {
          return this.view.substring(0, this.view.length - 1);
        },
        get minTime() {
          var t = n.getParsedDate(this.minDate);
          return new Date(t.year, t.month, t.date).getTime();
        },
        get maxTime() {
          var t = n.getParsedDate(this.maxDate);
          return new Date(t.year, t.month, t.date).getTime();
        },
        get curDecade() {
          return n.getDecade(this.date);
        },
      }),
      (n.getDaysCount = function (t) {
        return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
      }),
      (n.getParsedDate = function (t) {
        return {
          year: t.getFullYear(),
          month: t.getMonth(),
          fullMonth:
            t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
          date: t.getDate(),
          fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
          day: t.getDay(),
          hours: t.getHours(),
          fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
          minutes: t.getMinutes(),
          fullMinutes:
            t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
        };
      }),
      (n.getDecade = function (t) {
        var e = 10 * Math.floor(t.getFullYear() / 10);
        return [e, e + 9];
      }),
      (n.template = function (t, e) {
        return t.replace(/#\{([\w]+)\}/g, function (t, i) {
          return e[i] || 0 === e[i] ? e[i] : void 0;
        });
      }),
      (n.isSame = function (t, e, i) {
        if (!t || !e) return !1;
        var s = n.getParsedDate(t),
          a = n.getParsedDate(e),
          h = i ? i : "day",
          o = {
            day: s.date == a.date && s.month == a.month && s.year == a.year,
            month: s.month == a.month && s.year == a.year,
            year: s.year == a.year,
          };
        return o[h];
      }),
      (n.less = function (t, e, i) {
        return t && e ? e.getTime() < t.getTime() : !1;
      }),
      (n.bigger = function (t, e, i) {
        return t && e ? e.getTime() > t.getTime() : !1;
      }),
      (n.getLeadingZeroNum = function (t) {
        return parseInt(t) < 10 ? "0" + t : t;
      }),
      (n.resetTime = function (t) {
        return "object" == typeof t
          ? ((t = n.getParsedDate(t)), new Date(t.year, t.month, t.date))
          : void 0;
      }),
      (e.fn.datepicker = function (t) {
        return this.each(function () {
          if (e.data(this, o)) {
            var i = e.data(this, o);
            (i.opts = e.extend(!0, i.opts, t)), i.update();
          } else e.data(this, o, new m(this, t));
        });
      }),
      (e.fn.datepicker.Constructor = m),
      (e.fn.datepicker.language = {
        ru: {
          days: [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
          ],
          daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
          daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          months: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ],
          monthsShort: [
            "Янв",
            "Фев",
            "Мар",
            "Апр",
            "Май",
            "Июн",
            "Июл",
            "Авг",
            "Сен",
            "Окт",
            "Ноя",
            "Дек",
          ],
          today: "Сегодня",
          clear: "Очистить",
          dateFormat: "dd.mm.yyyy",
          timeFormat: "hh:ii",
          firstDay: 1,
        },
      }),
      e(function () {
        e(r).datepicker();
      });
  })(),
    (function () {
      var t = {
          days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
          months:
            '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
          years:
            '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>',
        },
        s = e.fn.datepicker,
        a = s.Constructor;
      (s.Body = function (t, i, s) {
        (this.d = t),
          (this.type = i),
          (this.opts = s),
          (this.$el = e("")),
          this.opts.onlyTimepicker || this.init();
      }),
        (s.Body.prototype = {
          init: function () {
            this._buildBaseHtml(), this._render(), this._bindEvents();
          },
          _bindEvents: function () {
            this.$el.on(
              "click",
              ".datepicker--cell",
              e.proxy(this._onClickCell, this)
            ),
              this.opts.range &&
                this.opts.dragRange &&
                (this.$el.on(
                  "mousedown",
                  ".datepicker--cell",
                  e.proxy(this._onMouseDown, this)
                ),
                this.$el.on(
                  "mousemove",
                  ".datepicker--cell",
                  e.proxy(this._onMouseMove, this)
                ),
                this.$el.on(
                  "mouseup",
                  ".datepicker--cell",
                  e.proxy(this._onMouseUp, this)
                ));
          },
          _buildBaseHtml: function () {
            (this.$el = e(t[this.type]).appendTo(this.d.$content)),
              (this.$names = e(".datepicker--days-names", this.$el)),
              (this.$cells = e(".datepicker--cells", this.$el));
          },
          _getDayNamesHtml: function (t, e, s, a) {
            return (
              (e = e != i ? e : t),
              (s = s ? s : ""),
              (a = a != i ? a : 0),
              a > 7
                ? s
                : 7 == e
                ? this._getDayNamesHtml(t, 0, s, ++a)
                : ((s +=
                    '<div class="datepicker--day-name' +
                    (this.d.isWeekend(e) ? " -weekend-" : "") +
                    '">' +
                    this.d.loc.daysMin[e] +
                    "</div>"),
                  this._getDayNamesHtml(t, ++e, s, ++a))
            );
          },
          _getCellContents: function (t, e) {
            var i = "datepicker--cell datepicker--cell-" + e,
              s = new Date(),
              n = this.d,
              h = a.resetTime(n.minRange),
              o = a.resetTime(n.maxRange),
              r = n.opts,
              c = a.getParsedDate(t),
              d = {},
              l = c.date;
            switch (e) {
              case "day":
                n.isWeekend(c.day) && (i += " -weekend-"),
                  c.month != this.d.parsedDate.month &&
                    ((i += " -other-month-"),
                    r.selectOtherMonths || (i += " -disabled-"),
                    r.showOtherMonths || (l = ""));
                break;
              case "month":
                l = n.loc[n.opts.monthsField][c.month];
                break;
              case "year":
                var u = n.curDecade;
                (l = c.year),
                  (c.year < u[0] || c.year > u[1]) &&
                    ((i += " -other-decade-"),
                    r.selectOtherYears || (i += " -disabled-"),
                    r.showOtherYears || (l = ""));
            }
            return (
              r.onRenderCell &&
                ((d = r.onRenderCell(t, e) || {}),
                (l = d.html ? d.html : l),
                (i += d.classes ? " " + d.classes : "")),
              r.range &&
                (a.isSame(h, t, e) && (i += " -range-from-"),
                a.isSame(o, t, e) && (i += " -range-to-"),
                1 == n.selectedDates.length && n.focused
                  ? (((a.bigger(h, t) && a.less(n.focused, t)) ||
                      (a.less(o, t) && a.bigger(n.focused, t))) &&
                      (i += " -in-range-"),
                    a.less(o, t) &&
                      a.isSame(n.focused, t) &&
                      (i += " -range-from-"),
                    a.bigger(h, t) &&
                      a.isSame(n.focused, t) &&
                      (i += " -range-to-"))
                  : 2 == n.selectedDates.length &&
                    a.bigger(h, t) &&
                    a.less(o, t) &&
                    (i += " -in-range-")),
              a.isSame(s, t, e) && (i += " -current-"),
              n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"),
              n._isSelected(t, e) && (i += " -selected-"),
              (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"),
              { html: l, classes: i }
            );
          },
          _getDaysHtml: function (t) {
            var e = a.getDaysCount(t),
              i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
              s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
              n = i - this.d.loc.firstDay,
              h = 6 - s + this.d.loc.firstDay;
            (n = 0 > n ? n + 7 : n), (h = h > 6 ? h - 7 : h);
            for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++)
              (r = t.getFullYear()),
                (o = t.getMonth()),
                (d += this._getDayHtml(new Date(r, o, l)));
            return d;
          },
          _getDayHtml: function (t) {
            var e = this._getCellContents(t, "day");
            return (
              '<div class="' +
              e.classes +
              '" data-date="' +
              t.getDate() +
              '" data-month="' +
              t.getMonth() +
              '" data-year="' +
              t.getFullYear() +
              '">' +
              e.html +
              "</div>"
            );
          },
          _getMonthsHtml: function (t) {
            for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s; )
              (e += this._getMonthHtml(new Date(i.year, s))), s++;
            return e;
          },
          _getMonthHtml: function (t) {
            var e = this._getCellContents(t, "month");
            return (
              '<div class="' +
              e.classes +
              '" data-month="' +
              t.getMonth() +
              '">' +
              e.html +
              "</div>"
            );
          },
          _getYearsHtml: function (t) {
            var e = (a.getParsedDate(t), a.getDecade(t)),
              i = e[0] - 1,
              s = "",
              n = i;
            for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
            return s;
          },
          _getYearHtml: function (t) {
            var e = this._getCellContents(t, "year");
            return (
              '<div class="' +
              e.classes +
              '" data-year="' +
              t.getFullYear() +
              '">' +
              e.html +
              "</div>"
            );
          },
          _renderTypes: {
            days: function () {
              var t = this._getDayNamesHtml(this.d.loc.firstDay),
                e = this._getDaysHtml(this.d.currentDate);
              this.$cells.html(e), this.$names.html(t);
            },
            months: function () {
              var t = this._getMonthsHtml(this.d.currentDate);
              this.$cells.html(t);
            },
            years: function () {
              var t = this._getYearsHtml(this.d.currentDate);
              this.$cells.html(t);
            },
          },
          _render: function () {
            this.opts.onlyTimepicker ||
              this._renderTypes[this.type].bind(this)();
          },
          _update: function () {
            var t,
              i,
              s,
              a = e(".datepicker--cell", this.$cells),
              n = this;
            a.each(function (a, h) {
              (i = e(this)),
                (s = n.d._getDateFromCell(e(this))),
                (t = n._getCellContents(s, n.d.cellType)),
                i.attr("class", t.classes);
            });
          },
          show: function () {
            this.opts.onlyTimepicker ||
              (this.$el.addClass("active"), (this.acitve = !0));
          },
          hide: function () {
            this.$el.removeClass("active"), (this.active = !1);
          },
          _handleClick: function (t) {
            var e = t.data("date") || 1,
              i = t.data("month") || 0,
              s = t.data("year") || this.d.parsedDate.year,
              a = this.d;
            if (a.view != this.opts.minView)
              return void a.down(new Date(s, i, e));
            var n = new Date(s, i, e),
              h = this.d._isSelected(n, this.d.cellType);
            return h
              ? void a._handleAlreadySelectedDates.bind(a, h, n)()
              : void a._trigger("clickCell", n);
          },
          _onClickCell: function (t) {
            var i = e(t.target).closest(".datepicker--cell");
            i.hasClass("-disabled-") || this._handleClick.bind(this)(i);
          },
          _onMouseDown: function (t) {
            this.pressed = !0;
          },
          _onMouseMove: function (t) {
            if (
              this.pressed &&
              (t.preventDefault(),
              !this.d.selectedDates.length || 2 == this.d.selectedDates.length)
            ) {
              var i = e(t.target).closest(".datepicker--cell");
              i.hasClass("-selected-") || this._handleClick(i);
            }
          },
          _onMouseUp: function (t) {
            this.pressed = !1;
            var i = e(t.target).closest(".datepicker--cell");
            i.hasClass("-disabled-") || this._handleClick(i);
          },
        });
    })(),
    (function () {
      var t =
          '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
        i = '<div class="datepicker--buttons"></div>',
        s =
          '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
        a = e.fn.datepicker,
        n = a.Constructor;
      (a.Navigation = function (t, e) {
        (this.d = t),
          (this.opts = e),
          (this.$buttonsContainer = ""),
          this.init();
      }),
        (a.Navigation.prototype = {
          init: function () {
            this._buildBaseHtml(), this._bindEvents();
          },
          _bindEvents: function () {
            this.d.$nav.on(
              "click",
              ".datepicker--nav-action",
              e.proxy(this._onClickNavButton, this)
            ),
              this.d.$nav.on(
                "click",
                ".datepicker--nav-title",
                e.proxy(this._onClickNavTitle, this)
              ),
              this.d.$datepicker.on(
                "click",
                ".datepicker--button",
                e.proxy(this._onClickNavButton, this)
              );
          },
          _buildBaseHtml: function () {
            this.opts.onlyTimepicker || this._render(),
              this._addButtonsIfNeed();
          },
          _addButtonsIfNeed: function () {
            this.opts.todayButton && this._addButton("today"),
              this.opts.clearButton && this._addButton("clear");
          },
          _render: function () {
            var i = this._getTitle(this.d.currentDate),
              s = n.template(t, e.extend({ title: i }, this.opts));
            this.d.$nav.html(s),
              "years" == this.d.view &&
                e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"),
              this.setNavStatus();
          },
          _getTitle: function (t) {
            return this.d.formatDate(this.opts.navTitles[this.d.view], t);
          },
          _addButton: function (t) {
            this.$buttonsContainer.length || this._addButtonsContainer();
            var i = { action: t, label: this.d.loc[t] },
              a = n.template(s, i);
            e("[data-action=" + t + "]", this.$buttonsContainer).length ||
              this.$buttonsContainer.append(a);
          },
          _addButtonsContainer: function () {
            this.d.$datepicker.append(i),
              (this.$buttonsContainer = e(
                ".datepicker--buttons",
                this.d.$datepicker
              ));
          },
          setNavStatus: function () {
            if (
              (this.opts.minDate || this.opts.maxDate) &&
              this.opts.disableNavWhenOutOfRange
            ) {
              var t = this.d.parsedDate,
                e = t.month,
                i = t.year,
                s = t.date;
              switch (this.d.view) {
                case "days":
                  this.d._isInRange(new Date(i, e - 1, 1), "month") ||
                    this._disableNav("prev"),
                    this.d._isInRange(new Date(i, e + 1, 1), "month") ||
                      this._disableNav("next");
                  break;
                case "months":
                  this.d._isInRange(new Date(i - 1, e, s), "year") ||
                    this._disableNav("prev"),
                    this.d._isInRange(new Date(i + 1, e, s), "year") ||
                      this._disableNav("next");
                  break;
                case "years":
                  var a = n.getDecade(this.d.date);
                  this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") ||
                    this._disableNav("prev"),
                    this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") ||
                      this._disableNav("next");
              }
            }
          },
          _disableNav: function (t) {
            e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-");
          },
          _activateNav: function (t) {
            e('[data-action="' + t + '"]', this.d.$nav).removeClass(
              "-disabled-"
            );
          },
          _onClickNavButton: function (t) {
            var i = e(t.target).closest("[data-action]"),
              s = i.data("action");
            this.d[s]();
          },
          _onClickNavTitle: function (t) {
            return e(t.target).hasClass("-disabled-")
              ? void 0
              : "days" == this.d.view
              ? (this.d.view = "months")
              : void (this.d.view = "years");
          },
        });
    })(),
    (function () {
      var t =
          '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
        i = e.fn.datepicker,
        s = i.Constructor;
      (i.Timepicker = function (t, e) {
        (this.d = t), (this.opts = e), this.init();
      }),
        (i.Timepicker.prototype = {
          init: function () {
            var t = "input";
            this._setTime(this.d.date),
              this._buildHTML(),
              navigator.userAgent.match(/trident/gi) && (t = "change"),
              this.d.$el.on("selectDate", this._onSelectDate.bind(this)),
              this.$ranges.on(t, this._onChangeRange.bind(this)),
              this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)),
              this.$ranges.on(
                "mousemove focus ",
                this._onMouseEnterRange.bind(this)
              ),
              this.$ranges.on(
                "mouseout blur",
                this._onMouseOutRange.bind(this)
              );
          },
          _setTime: function (t) {
            var e = s.getParsedDate(t);
            this._handleDate(t),
              (this.hours = e.hours < this.minHours ? this.minHours : e.hours),
              (this.minutes =
                e.minutes < this.minMinutes ? this.minMinutes : e.minutes);
          },
          _setMinTimeFromDate: function (t) {
            (this.minHours = t.getHours()),
              (this.minMinutes = t.getMinutes()),
              this.d.lastSelectedDate &&
                this.d.lastSelectedDate.getHours() > t.getHours() &&
                (this.minMinutes = this.opts.minMinutes);
          },
          _setMaxTimeFromDate: function (t) {
            (this.maxHours = t.getHours()),
              (this.maxMinutes = t.getMinutes()),
              this.d.lastSelectedDate &&
                this.d.lastSelectedDate.getHours() < t.getHours() &&
                (this.maxMinutes = this.opts.maxMinutes);
          },
          _setDefaultMinMaxTime: function () {
            var t = 23,
              e = 59,
              i = this.opts;
            (this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours),
              (this.minMinutes =
                i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes),
              (this.maxHours =
                i.maxHours < 0 || i.maxHours > t ? t : i.maxHours),
              (this.maxMinutes =
                i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes);
          },
          _validateHoursMinutes: function (t) {
            this.hours < this.minHours
              ? (this.hours = this.minHours)
              : this.hours > this.maxHours && (this.hours = this.maxHours),
              this.minutes < this.minMinutes
                ? (this.minutes = this.minMinutes)
                : this.minutes > this.maxMinutes &&
                  (this.minutes = this.maxMinutes);
          },
          _buildHTML: function () {
            var i = s.getLeadingZeroNum,
              a = {
                hourMin: this.minHours,
                hourMax: i(this.maxHours),
                hourStep: this.opts.hoursStep,
                hourValue: this.hours,
                hourVisible: i(this.displayHours),
                minMin: this.minMinutes,
                minMax: i(this.maxMinutes),
                minStep: this.opts.minutesStep,
                minValue: i(this.minutes),
              },
              n = s.template(t, a);
            (this.$timepicker = e(n).appendTo(this.d.$datepicker)),
              (this.$ranges = e('[type="range"]', this.$timepicker)),
              (this.$hours = e('[name="hours"]', this.$timepicker)),
              (this.$minutes = e('[name="minutes"]', this.$timepicker)),
              (this.$hoursText = e(
                ".datepicker--time-current-hours",
                this.$timepicker
              )),
              (this.$minutesText = e(
                ".datepicker--time-current-minutes",
                this.$timepicker
              )),
              this.d.ampm &&
                ((this.$ampm = e('<span class="datepicker--time-current-ampm">')
                  .appendTo(e(".datepicker--time-current", this.$timepicker))
                  .html(this.dayPeriod)),
                this.$timepicker.addClass("-am-pm-"));
          },
          _updateCurrentTime: function () {
            var t = s.getLeadingZeroNum(this.displayHours),
              e = s.getLeadingZeroNum(this.minutes);
            this.$hoursText.html(t),
              this.$minutesText.html(e),
              this.d.ampm && this.$ampm.html(this.dayPeriod);
          },
          _updateRanges: function () {
            this.$hours
              .attr({ min: this.minHours, max: this.maxHours })
              .val(this.hours),
              this.$minutes
                .attr({ min: this.minMinutes, max: this.maxMinutes })
                .val(this.minutes);
          },
          _handleDate: function (t) {
            this._setDefaultMinMaxTime(),
              t &&
                (s.isSame(t, this.d.opts.minDate)
                  ? this._setMinTimeFromDate(this.d.opts.minDate)
                  : s.isSame(t, this.d.opts.maxDate) &&
                    this._setMaxTimeFromDate(this.d.opts.maxDate)),
              this._validateHoursMinutes(t);
          },
          update: function () {
            this._updateRanges(), this._updateCurrentTime();
          },
          _getValidHoursFromDate: function (t, e) {
            var i = t,
              a = t;
            t instanceof Date && ((i = s.getParsedDate(t)), (a = i.hours));
            var n = e || this.d.ampm,
              h = "am";
            if (n)
              switch (!0) {
                case 0 == a:
                  a = 12;
                  break;
                case 12 == a:
                  h = "pm";
                  break;
                case a > 11:
                  (a -= 12), (h = "pm");
              }
            return { hours: a, dayPeriod: h };
          },
          set hours(t) {
            this._hours = t;
            var e = this._getValidHoursFromDate(t);
            (this.displayHours = e.hours), (this.dayPeriod = e.dayPeriod);
          },
          get hours() {
            return this._hours;
          },
          _onChangeRange: function (t) {
            var i = e(t.target),
              s = i.attr("name");
            (this.d.timepickerIsActive = !0),
              (this[s] = i.val()),
              this._updateCurrentTime(),
              this.d._trigger("timeChange", [this.hours, this.minutes]),
              this._handleDate(this.d.lastSelectedDate),
              this.update();
          },
          _onSelectDate: function (t, e) {
            this._handleDate(e), this.update();
          },
          _onMouseEnterRange: function (t) {
            var i = e(t.target).attr("name");
            e(".datepicker--time-current-" + i, this.$timepicker).addClass(
              "-focus-"
            );
          },
          _onMouseOutRange: function (t) {
            var i = e(t.target).attr("name");
            this.d.inFocus ||
              e(".datepicker--time-current-" + i, this.$timepicker).removeClass(
                "-focus-"
              );
          },
          _onMouseUpRange: function (t) {
            this.d.timepickerIsActive = !1;
          },
        });
    })();
})(window, jQuery);
/*[/datepicker]*/

/*[cookie]*/
function setCookie(a1, a2) {
  if (typeof a1 == "string") {
    var k = a1.split(";"),
      a1 = {};
    for (var i = 0; i < k.length; i++) {
      var j = k[i].split("=");
      a1[j[0].replace(/\s*/g, "")] = j[1];
    }
  }
  if (typeof a2 == "string") {
    var k = a2.split(";"),
      a2 = {};
    for (var i = 0; i < k.length; i++) {
      var j = k[i].split("=");
      a2[j[0].replace(/\s*/g, "")] = j[1];
    }
  }
  a2 = a2 || {};
  var s = "";
  if (a2.secure == true) {
    var s = "secure;";
  }
  var e = "";
  if (a2.expires) {
    var e =
      "expires=" +
      new Date(new Date().getTime() + a2.expires).toGMTString() +
      ";";
  }
  var d = "";
  if (a2.domain) {
    d = "domain=" + a2.domain + ";";
  }
  var p = a2.path || "/";
  for (var v in a1) {
    if (!v.match(/[^\s]/)) {
      continue;
    }
    document.cookie =
      v + "=" + encodeURIComponent(a1[v]) + ";path=" + p + ";" + d + e + s;
  }
}
function getCookie() {
  var c = document.cookie,
    o = {};
  c = c.split(";");
  for (var i = 0; i < c.length; i++) {
    var v = c[i].split("=");
    o[v[0].replace(/\s*/g, "")] = decodeURIComponent(v[1]);
  }
  return o;
}
function removeCookie(a, p) {
  a = a.split(" ");
  for (var i = 0; i < a.length; i++) {
    document.cookie =
      a[i] + "=;path=" + (p || "/") + ";expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}
/*[/cookie]*/

$(function () {
  if ($(window).width() > 1007) {
    window.v_st = $(window).scrollTop();
    $(window).on("scroll", function () {
      var st = $(window).scrollTop();
      if (st < window.v_st) {
        $(".animOnScroll").removeClass("scrollDown").addClass("scrollUp");
      } else {
        $(".animOnScroll").removeClass("scrollUp").addClass("scrollDown");
      }
      window.v_st = st;
    });
  }

  if ($(window).width() > 1007) {
    new WOW().init({ mobile: false });
  }

  /*[common]*/
  $("img[data-replace-src]").each(function () {
    $(this).attr("src", $(this).attr("data-replace-src"));
  });
  $("[data-replace-src]:not(img)").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-replace-src") + ")"
    );
  });
  /*[/common]*/

  /*[topNav]*/
  var MTID = 0;
  $(window).on("resize", function () {
    clearTimeout(MTID);
    MTID = setTimeout(function () {
      setMenuHandlers();
    }, 100);
  });
  function setMenuHandlers() {
    $(".page_header .topNav").each(function () {
      var topNav = $(this);
      var menu = topNav.find(".menu");
      topNav.removeClass("enabled");
      menu.append(menu.find(".more > ul > li"));
      menu.find(".more").remove();
      var moreItems = [];
      menu.find(" > li").each(function () {
        var item = $(this);
        if (Math.floor(item.position().left + item.width()) > topNav.width()) {
          moreItems.push(this);
        }
      });
      if (moreItems.length) {
        menu.append("<li class='more'><a></a><ul></ul></li>");
        $.each(moreItems, function () {
          menu.find(".more > ul").append($(this));
        });
      }
      topNav.addClass("enabled");
      menu.find("li").each(function () {
        if ($(this).find("ul").length) {
          $(this).addClass("hasSubmenu");
        }
      });
      menu.find("li").each(function () {
        if (!this.submenu_handler_mouseenter) {
          this.submenu_handler_mouseenter = 1;
          $(this).on("mouseenter", function () {
            var _this = $(this);
            var submenu = _this.find("ul").eq(0);
            var submenus = submenu.find("ul");
            var w = submenu.width(),
              v = "-" + w + "px",
              a = "auto";
            (r = v), (l = a), (d = "l");
            _this.addClass("hover");
            if (parseInt(submenu.parents("ul").css("left")) < 0) {
              d = "r";
            }
            if ($(window).width() - (_this.offset().left + _this.width()) < w) {
              d = "r";
            }
            if (d == "r") {
              r = a;
              l = v;
            }
            if (_this.parent().hasClass("menu")) {
              submenus.css({ right: r, left: l });
              r = a;
              l = 0;
              if (d == "r") {
                r = 0;
                l = a;
              }
              if (_this.offset().left < w) {
                r = a;
                l = 0;
              }
              submenu.css({ right: r, left: l });
            } else {
              if (d == "r") {
                submenu.css({ right: a, left: v });
              }
              if (_this.offset().left < w) {
                submenu.css({ right: v, left: a });
              }
            }
            submenu.fadeIn({ duration: 200, queue: false });
          });
          menu.find("li").on("mouseleave", function () {
            $(this).removeClass("hover");
            var submenu = $(this).find("ul").eq(0);
            submenu.fadeOut({ duration: 200, queue: false });
          });
        }
      });
    });
    $(".page_header .topNavMain").each(function () {
      var topNav = $(this);
      var menu = topNav.find(".menu");
      topNav.removeClass("enabled");
      menu.append(menu.find(".more > ul > li"));
      menu.find(".more").remove();
      var moreItems = [];

      topNav.addClass("enabled");
      menu.find("li").each(function () {
        if ($(this).find("ul").length) {
          $(this).addClass("hasSubmenu");
        }
      });
      menu.find("li").each(function () {
        if (!this.submenu_handler_mouseenter) {
          this.submenu_handler_mouseenter = 1;
          $(this).on("mouseenter", function () {
            var _this = $(this);
            var submenu = _this.find("ul").eq(0);
            var submenus = submenu.find("ul");
            var w = menu.width(),
              sw = submenu.innerWidth(),
              pl = 0,
              m = 0,
              v = 0;
            if (submenu.parent().length) {
              m =
                submenu.parent().width() -
                submenu.parent().find("a:first-child").width();
              pl =
                submenu.parent().position().left +
                parseFloat(submenu.parent().css("border-left")) * 2 -
                m / 2;
            }
            v = v + m / 2;
            if (w - pl < sw) {
              v = -(sw - (w - pl));
            }
            _this.addClass("hover");
            submenu.css({ left: v + "px" });
            submenu.fadeIn({ duration: 200, queue: false });
          });
          menu.find("li").on("mouseleave", function () {
            $(this).removeClass("hover");
            var submenu = $(this).find("ul").eq(0);
            submenu.fadeOut({ duration: 200, queue: false });
          });
        }
      });
    });
  }
  $(window).on("scroll", function () {
    var s = $(window).scrollTop();
    var t = $(".page_header .topNavMainWrapper").offset().top;
    if (s >= t) {
      $(".page_header .topNavMainInner").addClass("fixed");
    } else {
      $(".page_header .topNavMainInner").removeClass("fixed");
    }
  });
  $(window).on("resize", function () {
    $(".page_header").height($(".page_header_wrapper").outerHeight());
    $(".page_header .topNavMainWrapper").height(
      $(".page_header .topNavMainInner").height()
    );
    $(window).trigger("scroll");
  });

  $(window).trigger("resize");
  /*[/topNav]*/

  $(window).on("resize", function () {
    var wh = $(window).height();
    var hh = $(".page_header").height();
    var fh = $(".page_footer").height();
    var mh = Math.max(wh - (hh + fh), 100);
    $(".page_body").css({ "min-height": mh });
  });
  $(window).trigger("resize");

  /*[sideNavbar]*/
  $(".sideNavbar .mobNav .menu li").each(function () {
    if ($(this).find("ul").length) {
      $(this).addClass("hasSubmenu");
    }
  });
  $(".sideNavbar .mobNav .menu .hasSubmenu > a").each(function () {
    $(this).append("<i></i>");
  });
  $(".sideNavbar .mobNav .menu a > i").on("click", function (e) {
    var submenu = $(this).parents("li:first").find("ul:first");
    if (!submenu.parents("li:first").hasClass("expand")) {
      submenu
        .parents("ul:first")
        .find(".expand")
        .removeClass("expand")
        .find(" > ul")
        .hide(200);
      submenu.show(200).parents("li:first").addClass("expand");
    } else {
      submenu.hide(200).parents("li:first").removeClass("expand");
    }
    e.preventDefault();
  });
  $(".sideNavbar .mobNav .menu li.current-menu-item")
    .parents("li")
    .each(function () {
      if ($(this).parents(".mobNav").length) {
        $(this).addClass("current-menu-item");
      }
    });
  $(".sideNavbar_open").on("mouseup", function () {
    var sideNavbar = $(".sideNavbar");
    if (sideNavbar.hasClass("active")) {
      sideNavbar.removeClass("active");
    } else {
      sideNavbar.addClass("active");
    }
  });
  $(".sideNavbar_close").on("click", function () {
    var sideNavbar = $(".sideNavbar");
    sideNavbar.removeClass("active");
  });
  $("body").on("mousedown", function (event) {
    var sideNavbar = $(".sideNavbar");
    if (
      $(event.target).parents(".sideNavbar").length == 0 &&
      !$(event.target).hasClass("sideNavbar")
    ) {
      sideNavbar.removeClass("active");
    }
  });
  /*[/sideNavbar]*/

  $('[href^="/#"],[href^="#"]').click(function () {
    try {
      if ($(this).attr("class").match("flex")) {
        return false;
      }
    } catch (e) {}
    var href = $.attr(this, "href").replace("/", "");
    var el = $(this);
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - 100,
      },
      500,
      function () {}
    );

    return false;
  });

  //https://gist.github.com/MSerj/ad23c73f65e3610bbad96a5ac06d4924
  function numberWithSpaces(nr) {
    return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  /*[rangeSlider1]*/
  $(".rangeSlider").each(function () {
    var elem = $(this);
    elem.find("input[name='range']").ionRangeSlider({
      type: "double",
      hide_min_max: true,
      hide_from_to: true,
      onStart: function (data) {
        setTimeout(function () {
          setVal(data);
        }, 10);
      },
      onChange: function (data) {
        setVal(data);
      },
      onUpdate: function (data) {
        setTimeout(function () {
          setVal(data);
        }, 10);
      },
    });
    function setVal(data) {
      var from_v = numberWithSpaces(data.from);
      var to_v = numberWithSpaces(data.to);
      elem.find("input.from").attr("min", 0).val(from_v);
      elem.find("input.to").attr("max", data.to).val(to_v);
      elem.find(".from_size i").text(from_v);
      elem.find(".to_size i").text(to_v);
      var from_w = elem.find(".from_size")[0].scrollWidth;
      var to_w = elem.find(".to_size")[0].scrollWidth;
      var fs = elem.find(".from_size").css("font-size");
      elem
        .find("input.from")
        .css({ width: from_w + "px", "font-size": fs + "px" });
      elem.find("input.to").css({ width: to_w + "px", "font-size": fs + "px" });
      var from_l = elem.find(".irs-handle.from").position().left;
      var to_l = elem.find(".irs-handle.to").position().left;
      var from_w = elem.find("input.from").outerWidth();
      var to_w = elem.find("input.to").outerWidth();
      var handle_w = elem.find(".irs-handle.to").width();
      var irs_w = elem.find(".irs").width();
      from_l = from_l - from_w / 2;
      from_l = from_l + handle_w / 2;
      to_l = to_l - to_w / 2;
      to_l = to_l + handle_w / 2;
      from_l = Math.min(Math.max(from_l, 0), irs_w - to_w);
      to_l = Math.max(Math.min(to_l, irs_w - to_w), 0);
      elem.find("input.from").css({ left: from_l + "px" });
      elem.find("input.to").css({ left: to_l + "px" });
      elem.find(".error").hide();
    }
    elem.find("input.from").on("input paste change", function () {
      var from = $(this)
        .val()
        .replace(/[^0-9]+/gi, "");
      var rangeSlider = elem.find("input[name='range']").data("ionRangeSlider");
      rangeSlider.update({ from: from });
    });
    elem.find("input.to").on("input paste change", function () {
      var to = $(this)
        .val()
        .replace(/[^0-9]+/gi, "");
      var rangeSlider = elem.find("input[name='range']").data("ionRangeSlider");
      var max_v = parseFloat(elem.find("input[name='range']").attr("data-max"));
      if (to > max_v) {
        elem.find(".error").show();
        return;
      } else {
        elem.find(".error").hide();
      }
      rangeSlider.update({ to: to });
    });
    elem
      .find(".irs-handle.from,input.from")
      .on("mousedown touchstart", function () {
        elem.find("input.to").removeClass("active");
        elem.find("input.from").addClass("active");
      });
    elem
      .find(".irs-handle.to,input.to")
      .on("mousedown touchstart", function () {
        elem.find("input.from").removeClass("active");
        elem.find("input.to").addClass("active");
      });
  });
  $(window).on("resize", function () {
    $(".rangeSlider").each(function () {
      var elem = $(this);
      var rangeSlider = elem.find("input[name='range']").data("ionRangeSlider");
      rangeSlider.update();
    });
  });
  /*[/rangeSlider1]*/

  $(".dropdown").on("mouseenter", function () {
    $(this).addClass("over");
  });
  $(".dropdown").on("mouseleave", function () {
    $(this).removeClass("over");
  });
  $(".dropdown_btn").on("click", function () {
    var p = $(this).parents(".dropdown");
    p.find(".dropdown_con .block_l").show();
    let firstCatsTab = p.find(".dropdown_con .block_l .cats_tab")[0];
    if (firstCatsTab) {
      let firstCatHref = p.find(".dropdown_con .block_r .cats a")[0];
      firstCatsTab.classList.add("active");
      firstCatHref.classList.add("active");
    }
    if (p.hasClass("active")) {
      p.removeClass("active");
      p.find(".dropdown_con").fadeOut(200);
      p.find(".dropdown_con .block_l").hide();
      p.find(".dropdown_con .cats a").removeClass("active");
      p.find(".dropdown_con .cats_tab").removeClass("active");
    } else {
      p.addClass("active");
      p.find(".dropdown_con").fadeIn(200, function () {
        p.find(".rangeSlider").each(function () {
          var elem = $(this);
          var rangeSlider = elem
            .find("input[name='range']")
            .data("ionRangeSlider");
          rangeSlider.update();
        });
      });
    }
  });
  $(document).on("click", function (e) {
    $(".dropdown:not(.over)").removeClass("active");
    $(".dropdown:not(.over) .dropdown_con").fadeOut(200);
    $(".dropdown:not(.over) .dropdown_con .block_l").hide();
    $(".dropdown:not(.over) .dropdown_con .cats a").removeClass("active");
    $(".dropdown:not(.over) .dropdown_con .cats_tab").removeClass("active");
  });
  $(".dropdown_con .cats a").on("click", function () {
    var p = $(this).parents(".dropdown");
    var c = $(this).attr("data-c");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      p.find(".dropdown_con .block_l").hide();
      p.find(".dropdown_con .cats_tab").removeClass("active");
    } else {
      p.find(".dropdown_con .cats a").removeClass("active");
      $(this).addClass("active");
      p.find(".dropdown_con .cats_tab").removeClass("active");
      p.find(".dropdown_con .cats_tab[data-c=" + c + "]").addClass("active");
      p.find(".dropdown_con .block_l").show();
    }
  });

  $(".dropdown2").on("mouseenter", function () {
    $(this).addClass("over");
  });
  $(".dropdown2").on("mouseleave", function () {
    $(this).removeClass("over");
  });
  $(".dropdown2_btn").on("click", function () {
    var p = $(this).parents(".dropdown2");
    if (p.hasClass("active")) {
      p.removeClass("active");
      p.find(".dropdown2_con").fadeOut(200);
      p.find(".dropdown2_con .block_l").hide();
      p.find(".dropdown2_con .cats a").removeClass("active");
      p.find(".dropdown2_con .cats_tab").removeClass("active");
    } else {
      p.addClass("active");
      p.find(".dropdown2_con").fadeIn(200, function () {
        p.find(".rangeSlider").each(function () {
          var elem = $(this);
          var rangeSlider = elem
            .find("input[name='range']")
            .data("ionRangeSlider");
          rangeSlider.update();
        });
      });
    }
  });
  $(document).on("click", function (e) {
    $(".dropdown2:not(.over)").removeClass("active");
    $(".dropdown2:not(.over) .dropdown2_con").fadeOut(200);
    $(".dropdown2:not(.over) .dropdown2_con .block_l").hide();
    $(".dropdown2:not(.over) .dropdown2_con .cats a").removeClass("active");
    $(".dropdown2:not(.over) .dropdown2_con .cats_tab").removeClass("active");
  });

  $("form a.clear").on("click", function () {
    $(this)
      .parents("form")
      .find(".rangeSlider")
      .each(function () {
        var elem = $(this);
        var rangeSlider = elem
          .find("input[name='range']")
          .data("ionRangeSlider");
        rangeSlider.reset();
      });
  });

  function lineUp() {
    uLineUp(".item-service .tags");
    uLineUp(".item-service .title");
    uLineUp(".item-service .desc");

    uLineUp(".item-service2 .title");
    uLineUp(".item-service2 .text");
  }
  function setLineUpTimer() {
    clearTimeout(this.ulineup_timer);
    this.ulineup_timer = setTimeout(function () {
      lineUp();
    }, 200);
    clearTimeout(this.ulineup_timer2);
    this.ulineup_timer2 = setTimeout(function () {
      lineUp();
    }, 300);
  }
  $(window).on("resize", function () {
    setLineUpTimer();
  });
  $(window).trigger("resize");

  $(".taglist").each(function () {
    $(this)
      .find(".tag:not(.more)")
      .each(function (i) {
        this.tlq = i;
      });
  });
  $(".section-tags .dropdown2 input[name=orderby]").on("change", function () {
    var chinp = this;
    $(this)
      .parents(".dropdown2")
      .find("input[name=orderby]")
      .each(function () {
        if (this.checked == true) {
          chinp = this;
        }
      });
    var v = $(chinp).val();
    if (chinp.checked == false) {
      v = "";
    }
    var list = $(this).parents(".section").find(".taglist");
    orderTags(list, v);
  });
  $(".section-tags .dropdown2 label").on("mousedown", function () {
    var o = this;
    if ($(o).find("input")[0].checked == true) {
      $(o).on("mouseup", function () {
        setTimeout(function () {
          $(o).find("input")[0].checked = false;
          $(o).off("mouseup");
          $(o)
            .parents(".section")
            .find("input[name=orderby]")
            .eq(0)
            .trigger("change");
        }, 50);
      });
    }
  });
  $(".section-tags button[type=reset]").on("click", function () {
    var o = this;
    setTimeout(function () {
      $(o)
        .parents(".section")
        .find("input[name=orderby]")
        .eq(0)
        .trigger("change");
    }, 50);
  });
  function orderTags(el, v) {
    var list = $(el);
    var view = list.find(".taglist_view");
    var con = list.find(".taglist_container");
    var tags = $(el).find(".tag:not(.more)");
    var more = list.find(".tag.more");
    con.prepend(tags);
    con.append(more);
    list.find("ul").remove();
    tags.removeClass("hidden");
    var tags = $(el).find(".tag:not(.more)");
    var arr_def = [];
    var arr_appl = [];
    var arr_tech = [];
    tags.each(function () {
      arr_def[this.tlq] = this;
      if ($(this).hasClass("appl")) {
        arr_appl[$(this).text()] = this;
      } else {
        arr_tech[$(this).text()] = this;
      }
    });
    if (v == "") {
      tags
        .sort(function (a, b) {
          return a.tlq - b.tlq;
        })
        .appendTo(con);
    }
    if (v == "appl") {
      tags
        .filter(".appl")
        .sort(function (a, b) {
          return $(a).text() > $(b).text() ? 1 : -1;
        })
        .appendTo(con);
      tags
        .filter(".tech")
        .sort(function (a, b) {
          return $(a).text() > $(b).text() ? 1 : -1;
        })
        .appendTo(con);
    }
    if (v == "tech") {
      tags
        .filter(".tech")
        .sort(function (a, b) {
          return $(a).text() > $(b).text() ? 1 : -1;
        })
        .appendTo(con);
      tags
        .filter(".appl")
        .sort(function (a, b) {
          return $(a).text() > $(b).text() ? 1 : -1;
        })
        .appendTo(con);
    }
    if (list.hasClass("active")) {
      openTags(list);
    } else {
      closeTags(list);
    }
  }
  $(".taglist .tag.more").on("click", function () {
    var p = $(this).parents(".taglist");
    if (!p.hasClass("active")) {
      openTags(p);
    } else {
      closeTags(p);
    }
  });
  function openTags(el) {
    var list = $(el);
    list.addClass("active");
    var view = list.find(".taglist_view");
    var con = list.find(".taglist_container");
    var tags = list.find(".tag");
    var more = list.find(".tag.more");
    con.prepend(tags);
    con.append(more);
    list.find("ul").remove();
    tags.removeClass("hidden");
    var tags = list.find(".tag");
    var arr = [];
    var l = 0;
    arr[l] = [];
    var t = tags.position().top;
    tags.each(function () {
      var tc = $(this).position().top;
      if (tc != t) {
        t = tc;
        l++;
        arr[l] = [];
      }
      arr[l].push(this);
    });
    if (arr.length) {
      for (var i = 0; i < arr.length; i++) {
        var ul = document.createElement("ul");
        view[0].appendChild(ul);
        for (var n = 0; n < arr[i].length; n++) {
          var li = document.createElement("li");
          ul.appendChild(li);
          li.appendChild(arr[i][n]);
        }
      }
    }
    if (arr.length && arr.length > 4 && arr[arr.length - 1].length > 1) {
      list.addClass("hasMore");
    } else {
      list.removeClass("hasMore");
    }
    var more = list.find(".tag.more");
    if (more.position().left > list.width() - 350) {
      view.find("ul:last-child").addClass("wide");
    }
  }
  function closeTags(el) {
    var list = $(el);
    list.removeClass("active");
    var view = list.find(".taglist_view");
    var con = list.find(".taglist_container");
    var tags = list.find(".tag:not(.more)");
    var more = list.find(".tag.more");
    con.prepend(tags);
    con.append(more);
    list.find("ul").remove();
    tags.removeClass("hidden");
    var d = { 1: [], 2: [], 3: [], 4: [] };
    var n = 1;
    var t = tags.position().top;
    tags.each(function () {
      var tc = $(this).position().top;
      if (tc != t) {
        n++;
        t = tc;
      }
      if (n < 5) {
        d[n].push(this);
      } else {
        $(this).addClass("hidden");
      }
    });
    if (d[4].length) {
      var ul = document.createElement("ul");
      view.prepend(ul);
      for (var i = 0; i < d[4].length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(d[4][i]);
      }
      if (n > 4) {
        var liL = $(ul).find("li:last-child");
        con.prepend(liL.find(".tag").addClass("hidden"));
        liL.append(more[0]);
      }
    }
    if (d[3].length) {
      var ul = document.createElement("ul");
      view.prepend(ul);
      for (var i = 0; i < d[3].length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(d[3][i]);
      }
    }
    if (d[2].length) {
      var ul = document.createElement("ul");
      view.prepend(ul);
      for (var i = 0; i < d[2].length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(d[2][i]);
      }
    }
    if (d[1].length) {
      var ul = document.createElement("ul");
      view.prepend(ul);
      for (var i = 0; i < d[1].length; i++) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(d[1][i]);
      }
    }
    if (con.find(".tag").length > 1) {
      list.addClass("hasMore");
    } else {
      list.removeClass("hasMore");
    }
    if (more.position().left > list.width() - 350) {
      view.find("ul:last-child").addClass("wide");
    }
  }
  $(window).on("resize", function () {
    clearTimeout(window.TIDTAGS);
    window.TIDTAGS = setTimeout(function () {
      $(".taglist").each(function () {
        if ($(this).hasClass("active")) {
          openTags(this);
        } else {
          closeTags(this);
        }
      });
    }, 300);
  });
  $(window).trigger("resize");

  /*[dialogbox]*/
  $(".dialogbox .dialogbox_inner").on("click", function (e) {
    var dialogbox = $(this).parents(".dialogbox");
    if (e.target == this) {
      dialogbox.fadeOut(200);
    }
  });
  $(".dialogbox .dialogbox_close").on("click", function (e) {
    var dialogbox = $(this).parents(".dialogbox");
    dialogbox.fadeOut(200);
  });

  $(".btn-consultation").on("click", function () {
    $(".dialogbox-consultation").fadeIn(200);
  });
  $(".btn-callback").on("click", function () {
    $(".dialogbox-callback").fadeIn(200);
  });
  /*[/dialogbox]*/

  $(".dialogbox-consultation form").on("submit", function () {
    var form = $(this);
    var btn = $(this).find("button");
    if (form[0].ajax) {
      return false;
    }
    var data = $(this).serialize();
    $.ajax({
      url: "",
      method: "POST",
      cache: false,
      dataType: "html",
      data: data,
      beforeSend: function () {
        form[0].ajax = 1;
        form.addClass("submitting");
      },
      error: function () {
        form[0].ajax = 0;
        form.removeClass("submitting");
      },
      complete: function () {
        form[0].ajax = 0;
        form.removeClass("submitting");
      },
      success: function (d) {
        $(".dialogbox").fadeOut(200);
        $(".dialogbox-success").fadeIn(200);
      },
    });
    return false;
  });
});

function first() {
  document
    .getElementById("second_hide")
    .setAttribute("style", "opacity:1; transition: 1s; height: 100%;");

  document.getElementById("first").setAttribute("style", "display: none");

  document
    .getElementById("first_yelloy")
    .setAttribute("style", "display: block");
}

function first_yelloy() {
  document.getElementById("second_hide").setAttribute("style", "display: none");

  document
    .getElementById("first_yelloy")
    .setAttribute("style", "display: none");

  document.getElementById("first").setAttribute("style", "display: block");
}

$("a#test").click(function (e) {
  e.preventDefault();
  $(this).find("span.span_icon").toggleClass("active");
});

$("#myblock").css("display", "none"); // Для скрытия
$("#myblock").css("display", "block"); // Для показа

$("#button").click(function () {
  $("#block").css("display", "none");
});

$("#button").click(function () {
  $("#block").css("display", "block");
});

// Спойлеры в sideBarMenu
if (window.screen.width < 992) {
  const navLinkMobile = Array.from(
    document.querySelectorAll(".nav-link__mobile")
  );
  const subMenuUl = Array.from(
    document.querySelectorAll(".nav-link__mobile ul")
  );
  const headerMenuLinks = Array.from(
    document.querySelectorAll(".nav-link__mobile .header__menu")
  );
  for (const link of navLinkMobile) {
    link.onclick = function () {
      if (!link.classList.contains("nav-link-active")) {
        hideSubMenu(navLinkMobile, subMenuUl, headerMenuLinks);
        let subMenu = this.querySelector("ul");
        let headerMenuLink = this.querySelector("a");
        headerMenuLink.classList.add("nav-link-active");
        link.classList.add("nav-link-active");
        subMenu.style.cssText = `
						display:flex;
						flex-direction: column;
						gap: 16px;

						text-align: center;
					`;
      } else {
        hideSubMenu(navLinkMobile, subMenuUl, headerMenuLinks);
      }
    };
    function hideSubMenu(linksArr, subMenuArr, headerLinksArr) {
      linksArr.forEach((el) => {
        el.classList.remove("nav-link-active");
      });
      headerLinksArr.forEach((el) => {
        el.classList.remove("nav-link-active");
      });
      subMenuArr.forEach((el) => {
        el.style.cssText = "display:none";
      });
    }
  }
}
// Открытие и закрытие блоков с вопросами
// нажатие на сам блок
const lineFaqAnswer = Array.from(document.querySelectorAll(".line_faq_answer"));
// блок с ответом
const lineFaqQuestion = Array.from(
  document.querySelectorAll(".line_faq_question .right_block")
);
if (lineFaqQuestion) {
  for (const question of lineFaqQuestion) {
    question.onclick = function () {
      // текст в блоке
      const lineFaqText = this.querySelectorAll(
        ".whats_faq, .descript_question"
      );
      // кнопка "узнать ответ"
      const serviceBtn = this.querySelector(".firstText");
      if (!question.classList.contains("line_faq_active")) {
        hideLineFaqItem(lineFaqAnswer, lineFaqQuestion, serviceBtn);
        let index = lineFaqQuestion.indexOf(question);
        let currFaqAnswer = lineFaqAnswer[index];

        lineFaqText.forEach((text) => {
          text.style.color = "#fff";
        });
        question.classList.add("line_faq_active");

        serviceBtn.classList.add("line_faq_active");
        currFaqAnswer.style.display = "flex";
      } else {
        hideLineFaqItem(lineFaqAnswer, lineFaqQuestion, serviceBtn);
        lineFaqText.forEach((text) => {
          text.style.color = "#000";
        });
      }
    };
    function hideLineFaqItem(answerArr, questionArr, serviceBtn) {
      questionArr.forEach((btn) => {
        btn.classList.remove("line_faq_active");
      });
      answerArr.forEach((blockText) => {
        blockText.style.display = "none";
      });
      serviceBtn.classList.remove("line_faq_active");
    }
  }
}
// Этапы работы
const stepsBtns = Array.from(document.querySelectorAll(".steps__row .source"));
const stepsShowText = Array.from(document.querySelectorAll(".show"));
const opistText = Array.from(document.querySelectorAll(".opis_img_works"));
if (stepsBtns) {
  for (const btn of stepsBtns) {
    btn.onclick = function () {
      if (!btn.classList.contains("click_active")) {
        removeActiveCLass(stepsBtns, stepsShowText, opistText);
        btn.classList.add("click_active");
        let index = stepsBtns.indexOf(btn);
        opistText[index].style.cssText = `
					visibility: visible;
				`;
        if (window.screen.width < 992) {
          stepsShowText[index].style.cssText = `display: flex;`;
        } else {
          stepsShowText[index].style.cssText = `display: block;`;
        }
      } else {
        return;
      }
      function removeActiveCLass(btnArr, textArr, opistText) {
        btnArr.forEach((btn) => {
          btn.classList.remove("click_active");
        });
        textArr.forEach((text) => {
          text.style.display = "none";
        });
        opistText.forEach((el) => {
          el.style.cssText = `
						visibility: hidden;
					`;
        });
      }
    };
  }
}

// Ховер эффект у блока "что требуется"
const whatNeedItems = Array.from(
  document.querySelectorAll(".wpaer_buy_num .item_num")
);
if (whatNeedItems) {
  function mouseOnItem() {
    // При наведении получаем текст и картинку у блока
    let item = this;
    let itemText = this.querySelector(".opiasd");
    let itemImg = this.querySelector(".item_num__img__hidden");
    // Меняем стили на активные
    itemImg.classList.add("active");
    itemText.classList.add("active");
  }
  function mouseOutItem() {
    // Здесб меняем стили при покидании мышки от кнопки
    let item = this;
    let itemText = this.querySelector(".opiasd");
    let itemImg = this.querySelector(".item_num__img__hidden");
    itemImg.classList.remove("active");
    itemText.classList.remove("active");
  }
  for (const item of whatNeedItems) {
    // Назначаем события блокам
    item.addEventListener("mouseover", mouseOnItem);
    item.addEventListener("mouseout", mouseOutItem);
  }
}

// Открытие меню для связи и меню заявки, кнопка для скрола вверх
// Кнопка сообщения
const messenger = document.querySelector(".position_rel .mess");
const messengerItems = Array.from(
  document.querySelectorAll(".position_rel .telegram, .position_rel .watsup")
);
// Кнопка "вверх"
const arrowBtnUp = document.querySelector(".position_rel .up");
// Добавляем окну событие, чтобы считать - сколько пикселей проскроленно
window.addEventListener("scroll", windowScroll);
function windowScroll() {
  // Получем кол-во проскроленных пикселей
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 400) {
    // Показываем кнопку
    arrowBtnUp.classList.add("is-visible");
    arrowBtnUp.addEventListener("click", scrollUp);
    // Функция скрола вверх страницы
    function scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  } else {
    // Скрываем кнопку
    arrowBtnUp.classList.remove("is-visible");
  }
}
// Открытие соц сетей
if (messenger) {
  messenger.onclick = function () {
    messengerItems.forEach((el) => {
      el.classList.toggle("is-visible");
    });
  };
}

// Ховер в блоке Услуги на главной

const itemService = Array.from(document.querySelectorAll(".item-service2"));

if (itemService) {
  for (const item of itemService) {
    const imgDisplayed = item.querySelector(".index-services__img");
    const imgHidden = item.querySelector(".index-services__img__hover");
    item.onmouseover = () => {
      imgDisplayed.classList.add("active-hover");
      imgHidden.classList.add("active-hover");
    };
    item.onmouseout = () => {
      imgDisplayed.classList.remove("active-hover");
      imgHidden.classList.remove("active-hover");
    };
  }
}

// Открытие картинок в галерее
const galleryImg = Array.from(document.querySelectorAll(".img_gall"));
if (galleryImg) {
  const modalImg = document.querySelector(".modal-img");
  const modalSlider = document.querySelector(".slider-modal");
  for (const img of galleryImg) {
    img.onclick = function () {
      galleryImg.forEach((image) => {
        // Ищем картинку на которую кликнули
        searchingFirstElement(img, image);
      });
      galleryImg.forEach((image) => {
        // Создаем остальные эелементы
        createSliderElement(image);
      });
      function createSliderElement(image) {
        let cloneImg = image.cloneNode(false);
        let slide = document.createElement("div");
        slide.classList.add("slider-item", "slider-item__modal");
        slide.append(cloneImg);
        // Очищаем и прячем контейнер
        slide.addEventListener("click", removeChildes);
        // Это нужно чтобы получать каждый раз новый контейнер для слайдов,
        // Он убирается и создается каждый раз по-новой
        appendElements(slide);
      }
      function searchingFirstElement(firstIteratedImg, secondIteratedImg) {
        if (firstIteratedImg == secondIteratedImg) {
          createSliderElement(secondIteratedImg);
        }
      }
      // Показываем контейнер для слайдера
      modalImg.classList.add("modal-active");
      // Очищаем и прячем контейнер
      function removeChildes() {
        modalImg.innerHTML = "";
        modalImg.innerHTML = '<div class="slider slider-modal"></div>';
        modalImg.classList.remove("modal-active");
      }
      // Создаем слайды в слайдере
      function appendElements(slide) {
        const modalSLiderNew = document.querySelector(".slider-modal");
        modalSLiderNew.append(slide);
      }
      // Создаем слайдер
      createSlider();
      function createSlider() {
        if (modalSlider) {
          $(document).ready(function () {
            $(".slider-modal").slick({
              dots: false,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 3000,
              slidesToShow: 1,
              arrows: true,
            });
          });
        }
      }
    };
  }
}

// Блок стоимости и доп опций
$(document).ready(function () {
  $(".line_object").click(function name(event) {
    if ($(".wraper_line_o").hasClass("one")) {
      $(".line_object").not($(this)).removeClass("active");
      $(".open_line_object").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  let uluru = {};
  if (window.screen.width > 992) {
    uluru = { lat: 55.6822, lng: 37.6156 };
  }
  uluru = { lat: 55.68576821231252, lng: 37.629310840674954 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });
  let imageMarker = new google.maps.MarkerImage(
    "../VR/img/map-icon.svg",
    null /* size is determined at runtime */,
    null /* origin is 0,0 */,
    null /* anchor is bottom center of the scaled image */,
    new google.maps.Size(60, 60)
  );
  const marker = new google.maps.Marker({
    position: { lat: 55.68576821231252, lng: 37.629310840674954 },
    map: map,
    icon: imageMarker,
  });

  $.getJSON("./js/map.json", function (data) {
    map.setOptions({ styles: data });
  });
}
window.initMap = initMap;
// Проверка и логика для формы

function actionForm(form) {
  // Проверка ввода и получение поля с именем
  const formName = form.querySelector("#name");
  if (formName) {
    formName.onchange = function () {
      formName.value = formName.value.replace(/\d{1,}/gi, "");
      let message = formName.nextSibling.nextSibling;
      if (formName.value.length == 1 || formName.value.length < 3) {
        message.classList.add("active");
        message.textContent = "Имя должно быть длинее 3 символов!";
      } else {
        message.classList.remove("active");
        message.textContent = "";
      }
    };
  }
  // Проверка ввода и получение поля с мылом
  const formEmail = form.querySelector("#email");
  if (formEmail) {
    formEmail.onchange = function () {
      let message = formEmail.nextSibling.nextSibling;
      const str = formEmail.value;
      if (!(str.length >= 6 && str.includes("@") && str.includes("."))) {
        message.classList.add("active");
        message.textContent = "Введите корректный email!";
      } else {
        message.classList.remove("active");
        message.textContent = "";
      }
    };
  }
  let formPhone = form.querySelector("#phone");
  if (formPhone) {
    let formPhonePlaceholder = formPhone
      .getAttribute("placeholder")
      .replace(/x/g, 9);
    $(formPhone).on("countrychange", function (e, countryData) {
      $(formPhone).val("");
      let formPhonePlaceholder = formPhone
        .getAttribute("placeholder")
        .replace(/x/g, 9);
      $(formPhone).mask(formPhonePlaceholder);
    });
    $(formPhone).mask(formPhonePlaceholder);
    formPhone.oninput = function () {
      // Когда смена страны
    };
  }

  // Если в форме нет телефона
  if (!formPhone) {
    formPhone = 1;
  }
  // Согласине с политикой
  let formCheckbox = form.querySelector("#form__checkbox").checked;
  // Проверяем заполнение всех полей
  let currValue =
    formCheckbox &&
    formName.value.length >= 3 &&
    formPhone.value.length > 0 &&
    formEmail.value.length >= 6 &&
    formEmail.value.includes("@") &&
    formEmail.value.includes(".");
  // Ключаем и выключаем копку
  let formBtn = form.querySelector("#form__button");
  formBtn.disabled = !currValue;
}
// Включение и отключения звука на странице. Подключение видео с ютуба
const pageMuteBtn = document.querySelector(".page__sound");
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;

if (pageMuteBtn) {
  function onYouTubePlayerAPIReady() {
    player = new YT.Player("ytvideo", {
      height: "100%",
      width: "100%",
      //   videoId: "gqxMpfV_aeI",
      //   playerVars: {
      //     autoplay: 1,
      //     controls: 1,
      //     mute: 1,
      //     playsinline: 1,
      //     loop: 1,
      //     playlist: "gqxMpfV_aeI",
      //     modestbranding: 1,
      //     rel: 0,
      //     showinfo: 0,
      //     disablekb: 1,
      //     iv_load_policy: 3,
      //   },
      events: {
        onReady: onPlayerReady,
      },
    });
  }

  function onPlayerReady(event) {
    //event.target.mute();
    event.target.setVolume(20);
    event.target.playVideo();
  }
  pageMuteBtn.onclick = function () {
    if (player.isMuted()) {
      player.unMute();
      player.setVolume(5);
      pageMuteBtn.innerHTML =
        '<img src="img/about/sound.svg" alt="" class="sound">';
    } else {
      pageMuteBtn.innerHTML =
        '<img src="img/about/muted.svg" alt="" class="muted">';
      player.mute();
    }
  };
}

// Слайдеры
const sliderSteps = document.querySelector(".slider-steps");
if (sliderSteps) {
  $(document).ready(function () {
    $(".slider-steps").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: true,
    });
    $(".slider-steps").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".slider__num").text(`0${currentSlide + 1}`);
      }
    );
  });
}
const sliderReviews = document.querySelector(".slider-reviews");
if (sliderReviews) {
  $(document).ready(function () {
    $(".slider-reviews").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: true,
    });
  });
}
// Маленький слайдер
const sliderReviewsSmall = document.querySelector(".slider-reviews__small");
if (sliderReviewsSmall) {
  $(document).ready(function () {
    $(".slider-reviews__small").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        },
      ],
    });
  });
}
const sliderFeatured = document.querySelector(".slider-featured");
if (sliderFeatured) {
  $(document).ready(function () {
    $(".slider-featured").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 872,
          settings: {
            slidesToShow: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        },
      ],
    });
  });
}
// Cлайдер блока интро в портфоли и о нас
const sliderIntro = document.querySelector(".slider-intro");
if (sliderIntro) {
  $(document).ready(function () {
    $(".slider-intro").slick({
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: true,
    });
  });
}
const sliderVakancy = document.querySelector(".slider-vakancy");
if (sliderVakancy) {
  $(document).ready(function () {
    $(".slider-vakancy").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: true,
    });
  });
}
const sliderProject = document.querySelector(".slider-project");
if (sliderProject) {
  $(document).ready(function () {
    $(".slider-project").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: true,
    });
    $(".slider-project").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".slider__num").text(`0${currentSlide + 1}`);
      }
    );
  });
}
const sliderClients = document.querySelector(".slider-clients");
if (sliderClients) {
  $(document).ready(function () {
    $(".slider-clients").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: true,
    });
  });
}
const sliderTehnology = document.querySelector(".slider-tehnology");
if (sliderTehnology) {
  $(document).ready(function () {
    $(".slider-tehnology").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        },
      ],
    });
  });
}
const sliderGallery = document.querySelector(".slider-gallery");
if (sliderGallery) {
  $(document).ready(function () {
    $(".slider-gallery").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: true,
    });
  });
}
const sliderGallerySmall = document.querySelector(".slider-gallery__small");
if (sliderGallerySmall) {
  $(document).ready(function () {
    $(".slider-gallery__small").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      arrows: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            infinite: true,
          },
        },
      ],
    });
  });
}
