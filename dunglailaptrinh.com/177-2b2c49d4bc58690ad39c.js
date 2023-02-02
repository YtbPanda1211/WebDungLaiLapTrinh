"use strict";
(self.webpackChunknotion_next = self.webpackChunknotion_next || []).push([
    [177], {
        32310: (e, t, s) => {
            s.d(t, {
                Z: () => T
            });
            var i = s(67154),
                o = s.n(i),
                r = s(98135),
                n = s.n(r),
                a = s(59713),
                d = s.n(a),
                l = (s(33948), s(67294)),
                p = s.n(l),
                u = s(5366),
                m = s(3779),
                c = s(46167),
                g = s(48762),
                h = s(66832),
                v = s(95009),
                S = s(25584),
                f = s(47966),
                b = s(83071),
                M = s(23189),
                y = s(46951),
                w = s(35822),
                P = s(48209);
            const Z = ["system", "light", "dark"],
                C = (0, u.defineMessages)({
                    systemLabel: {
                        id: "appearanceSetting.system.label",
                        defaultMessage: "Use system setting"
                    },
                    lightLabel: {
                        id: "appearanceSetting.light.label",
                        defaultMessage: "Light"
                    },
                    darkLabel: {
                        id: "appearanceSetting.dark.label",
                        defaultMessage: "Dark"
                    }
                });
            class k extends h.Z {
                constructor(...e) {
                    super(...e), d()(this, "storeTypes", {
                        appearanceStore: P.Z
                    }), d()(this, "handleChangeAppearance", (e => {
                        (0, w.rz)(this.environment, e), this.stores.appearanceStore.setState({
                            appearanceSetting: e
                        })
                    }))
                }
                didMount() {
                    const e = (0, w.MH)(this.environment);
                    this.stores.appearanceStore.setState({
                        appearanceSetting: e
                    })
                }
                renderComponent() {
                    return n()("div", {}, void 0, this.renderHeader(), n()("div", {
                        style: this.getSettingsOptionStyle()
                    }, void 0, n()(y.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "80%"
                        }
                    }, void 0, n()(u.FormattedMessage, {
                        id: "appearanceSettings.description.message",
                        defaultMessage: "Customize how Notion looks on your device."
                    })), this.renderAppearanceButton()))
                }
                renderHeader() {
                    const {
                        device: e
                    } = this.environment;
                    return n()(M.Z, {
                        large: !e.isMobile || void 0,
                        divider: e.isMobile ? void 0 : "full"
                    }, void 0, n()(u.FormattedMessage, {
                        id: "appearanceSettings.title",
                        defaultMessage: "Appearance"
                    }))
                }
                renderAppearanceButton() {
                    const {
                        device: e
                    } = this.environment;
                    return n()(c.Z, {
                        popupType: e.isMobile ? c.Z.PopupType.SlideUp : c.Z.PopupType.Popup,
                        placementToOrigin: c.Z.Placement.Right,
                        renderOrigin: e => p().createElement(f.Z, o()({}, e, {
                            isLarge: !0,
                            style: {
                                marginTop: 12,
                                marginBottom: 4
                            }
                        }), k.getAppearanceLabel(this.stores.appearanceStore.state.appearanceSetting), m.Z.chevronDown({
                            width: 10,
                            marginLeft: 4,
                            fill: this.theme.lightIconColor
                        })),
                        render: t => {
                            let s;
                            s = e.isMobile ? {
                                menuType: v.ZP.MenuType.Modal,
                                title: n()(u.FormattedMessage, {
                                    defaultMessage: "Appearance",
                                    id: "appearanceSettings.modal.title"
                                }),
                                right: n()(u.FormattedMessage, {
                                    defaultMessage: "Done",
                                    id: "appearanceSettings.modal.done"
                                }),
                                onClickRight: t.close
                            } : {
                                menuType: v.ZP.MenuType.Popup,
                                width: 250
                            };
                            const i = Z.map((e => ({
                                key: e,
                                action: s => {
                                    this.handleChangeAppearance(e), t.close()
                                },
                                render: (t, s) => p().createElement(g.Z, o()({}, t, {
                                    title: k.getAppearanceLabel(e)
                                }))
                            })));
                            return p().createElement(v.ZP, s, n()(S.Z, {
                                type: S.Z.Type.Vertical,
                                sections: [{
                                    key: "appearance section",
                                    render: e => p().createElement(b.Z, e),
                                    items: i
                                }],
                                initialFocus: void 0
                            }))
                        }
                    })
                }
                static getAppearanceLabel(e) {
                    switch (e) {
                        case "light":
                            return p().createElement(u.FormattedMessage, C.lightLabel);
                        case "dark":
                            return p().createElement(u.FormattedMessage, C.darkLabel);
                        case "system":
                            return p().createElement(u.FormattedMessage, C.systemLabel)
                    }
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            const T = k
        },
        79092: (e, t, s) => {
            s.d(t, {
                Z: () => u
            });
            var i = s(98135),
                o = s.n(i),
                r = (s(67294), s(5366)),
                n = s(66832),
                a = s(23189),
                d = s(47714),
                l = s(46951);
            class p extends n.Z {
                renderComponent() {
                    const {
                        device: e
                    } = this.environment;
                    return o()("div", {
                        style: this.getSettingsOptionStyle()
                    }, void 0, o()(a.Z, {}, void 0, o()(r.FormattedMessage, {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    })), o()("div", {
                        onClick: this.props.onClick,
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: 12,
                            cursor: "pointer",
                            width: "100%"
                        }
                    }, void 0, o()("div", {
                        style: {
                            flex: 1
                        }
                    }, void 0, o()(l.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%"
                        }
                    }, void 0, o()(r.FormattedMessage, {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will change how all calendars in your app look."
                    }))), o()("div", {
                        style: {
                            marginTop: 5
                        }
                    }, void 0, o()(d.Z, {
                        on: 1 === this.props.startDayOfWeek,
                        isAndroid: e.isAndroid
                    }))))
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            const u = p
        },
        21752: (e, t, s) => {
            s.d(t, {
                Z: () => l
            });
            var i = s(98135),
                o = s.n(i),
                r = (s(67294), s(5366)),
                n = s(19889),
                a = s(52738),
                d = s(46951);
            const l = function(e) {
                const t = (0, r.useIntl)(),
                    {
                        userValue: s,
                        containerStyle: i
                    } = e;
                return s ? o()("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 300,
                        ...i
                    }
                }, void 0, o()(a.Z, {
                    userValue: s,
                    size: 28
                }), o()("div", {
                    style: {
                        minWidth: 0,
                        marginLeft: 6,
                        marginRight: 6
                    }
                }, void 0, o()(d.Z, {
                    className: "notranslate"
                }, void 0, (0, n.Nz)(t, s)), o()(d.Z, {
                    isSmall: !0
                }, void 0, s.email))) : null
            }
        },
        79603: (e, t, s) => {
            s.d(t, {
                mS: () => L,
                Ub: () => G,
                Pp: () => A
            });
            var i = s(67154),
                o = s.n(i),
                r = s(98135),
                n = s.n(r),
                a = (s(33948), s(67294)),
                d = s.n(a),
                l = s(89940),
                p = s(95155),
                u = s(25584),
                m = s(83071),
                c = s(46167),
                g = s(58879),
                h = s(3779),
                v = s(64215),
                S = s(95009),
                f = s(5366),
                b = s(48762),
                M = s(40235),
                y = s(23189),
                w = s(46951),
                P = s(62727),
                Z = s(47966),
                C = s(27386),
                k = s(69972),
                T = s(68932),
                I = s(96486),
                x = s.n(I),
                B = s(95477);
            const F = "janus";

            function L(e) {
                return "production" !== B.default.env && ("on" === p.default.getGroup(F) || "local" === B.default.env)
            }

            function G(e) {
                const t = (0, g.O7)(),
                    [s, i] = (0, a.useState)(""),
                    [r, C] = (0, a.useState)(void 0),
                    k = (0, l.VK)((() => p.default.getExperiments().filter((e => e.experimentId !== F && (!s || 0 === s.length || e.experimentId.includes(s)))).sort(((e, t) => e.experimentId > t.experimentId ? 1 : -1))), [s]),
                    {
                        device: I
                    } = t,
                    B = I.isMobile,
                    L = (0, v.y)((e => ({
                        containerStyle: {
                            width: "100%"
                        },
                        headerContainerStyle: {
                            display: "flex",
                            alignItems: "flex-start",
                            cursor: "pointer",
                            width: "100%",
                            flexWrap: "wrap"
                        },
                        headerLabelStyle: {
                            marginTop: 2,
                            marginBottom: 12,
                            padding: 2,
                            flex: 1
                        },
                        filterContainerStyle: {
                            paddingBottom: "12px"
                        },
                        resetButtonContainerStyle: {
                            paddingBottom: "12px"
                        },
                        tableExperimentIDHeaderStyle: {
                            width: "auto"
                        },
                        tableExperimentGroupHeaderStyle: {
                            width: "auto",
                            textAlign: "right"
                        },
                        experimentGroupContainerStyle: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        experimentGroupButtonStyle: {
                            maxWidth: B ? "100px" : void 0,
                            overflowX: "hidden",
                            justifyContent: "left"
                        },
                        experimentGroupButtonChevronStyle: {
                            width: 10,
                            marginLeft: 4,
                            fill: e.lightIconColor
                        },
                        experimentGroupButtonCheckContainerStyle: {
                            width: B ? 16 : 14
                        }
                    })), [B]);
                return n()("div", {
                    style: L.containerStyle
                }, void 0, n()(y.Z, {
                    large: !I.isMobile || void 0
                }, void 0, "Experiment Overrides"), n()("div", {
                    style: L.headerContainerStyle
                }, void 0, n()(w.Z, {
                    isSmall: !0,
                    isMultiline: !0,
                    style: L.headerLabelStyle
                }, void 0, "Turn on (or off) experiments for yourself. This only works for experiments that are based on userId or deviceId"), n()("div", {
                    style: L.resetButtonContainerStyle
                }, void 0, n()(Z.Z, {
                    isSmall: !0,
                    onClick: () => {
                        C({
                            reset: !0
                        }), p.default.resetExperimentOverrides(t).then((() => {
                            C(void 0)
                        }))
                    }
                }, void 0, null != r && r.reset ? n()(T.Z, {}) : "Reset to defaults"))), n()("div", {
                    style: L.filterContainerStyle
                }, void 0, n()(P.Z, {
                    placeholder: "Filter by Experiment ID...",
                    value: s,
                    showClearButton: !0,
                    autoCapitalize: "off",
                    autoComplete: "off",
                    onChange: e => {
                        i(e.target.value)
                    }
                })), n()(M.Z, {
                    columns: [{
                        key: "name",
                        header: "Experiment ID",
                        style: L.tableExperimentIDHeaderStyle
                    }, {
                        key: "group",
                        header: "Group",
                        style: L.tableExperimentGroupHeaderStyle
                    }],
                    rows: k.map((e => {
                        const s = e.group;
                        return {
                            key: e.experimentId,
                            columns: [e.experimentId, n()("div", {
                                style: L.experimentGroupContainerStyle
                            }, void 0, n()(c.Z, {
                                popupType: I.isMobile ? c.Z.PopupType.SlideUp : c.Z.PopupType.Popup,
                                renderOrigin: t => d().createElement(Z.Z, o()({}, t, {
                                    key: e.experimentId,
                                    style: L.experimentGroupButtonStyle
                                }), null != s ? s : "unknown", h.Z.chevronDown(L.experimentGroupButtonChevronStyle)),
                                render: i => {
                                    let a;
                                    a = I.isMobile ? {
                                        menuType: S.ZP.MenuType.Modal,
                                        title: e.experimentId,
                                        right: n()(f.FormattedMessage, {
                                            defaultMessage: "Done",
                                            id: "appearanceSettings.modal.done"
                                        }),
                                        onClickRight: i.close
                                    } : {
                                        menuType: S.ZP.MenuType.Popup,
                                        width: 250
                                    };
                                    const l = e.groups.map((a => ({
                                        key: a,
                                        action: s => {
                                            C({
                                                experimentId: e.experimentId,
                                                group: a
                                            }), p.default.setExperimentOverride(t, e.experimentId, a).then((() => {
                                                C(void 0), x().delay((() => {
                                                    i.close()
                                                }), 1e3)
                                            }))
                                        },
                                        render: (t, i) => d().createElement(b.Z, o()({}, t, {
                                            title: a,
                                            right: r && r.experimentId === e.experimentId && r.group === a ? n()("div", {
                                                style: L.experimentGroupButtonCheckContainerStyle
                                            }, void 0, n()(T.Z, {})) : a !== s || r ? void 0 : n()("div", {
                                                style: L.experimentGroupButtonCheckContainerStyle
                                            }, void 0, h.Z.check())
                                        }))
                                    })));
                                    return d().createElement(S.ZP, a, n()(u.Z, {
                                        type: u.Z.Type.Vertical,
                                        initialFocus: void 0,
                                        sections: [{
                                            key: e.experimentId,
                                            render: e => d().createElement(m.Z, e),
                                            items: l
                                        }]
                                    }))
                                }
                            }))]
                        }
                    }))
                }))
            }

            function A(e) {
                const t = (0, v.y)((e => ({
                    headerLabelStyle: {
                        marginTop: 2,
                        width: "80%"
                    },
                    outlineButtonStyle: {
                        marginTop: 12,
                        marginBottom: 4
                    }
                })), []);
                return n()("div", {}, void 0, n()(y.Z, {}, void 0, "Experiments"), n()(w.Z, {
                    isSmall: !0,
                    isMultiline: !0,
                    style: t.headerLabelStyle
                }, void 0, "Locally turn on (or off) experiments"), n()(c.Z, {
                    popupType: c.Z.PopupType.SlideUp,
                    renderOrigin: e => d().createElement(Z.Z, o()({}, e, {
                        isLarge: !0,
                        style: t.outlineButtonStyle
                    }), "View Experiments"),
                    render: e => {
                        const t = {
                            menuType: S.ZP.MenuType.Modal,
                            whiteBackground: !0,
                            title: "Experiments",
                            right: n()(f.FormattedMessage, {
                                defaultMessage: "Done",
                                id: "appearanceSettings.modal.done"
                            }),
                            onClickRight: e.close
                        };
                        return n()(k.Z, {
                            capture: !0,
                            allowEsc: !0,
                            render: () => d().createElement(S.ZP, t, n()(C.Z, {
                                disableScroller: !0
                            }, void 0, n()(G, {})))
                        })
                    }
                }))
            }
        },
        64131: (e, t, s) => {
            s.d(t, {
                Z: () => U
            });
            var i = s(98135),
                o = s.n(i),
                r = s(67154),
                n = s.n(r),
                a = s(59713),
                d = s.n(a),
                l = (s(33948), s(67294)),
                p = s.n(l),
                u = s(46167),
                m = s(66832),
                c = s(37235),
                g = s(98742),
                h = s(50906),
                v = s(14947),
                S = s(24666),
                f = s(3779),
                b = s(25584),
                M = s(95009),
                y = s(83071),
                w = s(98724),
                P = s(8848),
                Z = s(41216),
                C = s(82990),
                k = s(52689),
                T = s(52377),
                I = s(63334),
                x = s(70203),
                B = s(94610),
                F = s(89086),
                L = s(5366),
                G = s(15282);
            const A = p().Fragment;
            class R extends m.Z {
                constructor(...e) {
                    super(...e), d()(this, "storeTypes", {
                        ignoreSelectionAreaStore: I.Z
                    }), d()(this, "renderHighlightColorMenuItem", ((e, t, s, i) => ({
                        key: t || e,
                        action: () => {
                            s(), this.menuItemAction(e), i.close()
                        },
                        render: s => p().createElement(Z.Z, n()({}, s, {
                            color: e,
                            overrideDisplayName: t
                        }))
                    }))), d()(this, "handleToggleHighlightAnnotation", (() => {
                        w.aS({
                            environment: this.environment,
                            annotation: ["h", k.Z.state.color]
                        }), h.mt_(this.environment, {
                            action: "h",
                            color: k.Z.state.color
                        })
                    })), d()(this, "handleButtonPopupClick", (e => {
                        h.mt_(this.environment, {
                            action: "h"
                        })
                    })), d()(this, "handleClose", (() => {
                        S.default.emit()
                    })), d()(this, "menuItemAction", (e => {
                        w.mX({
                            environment: this.environment,
                            annotationType: "h"
                        }), "default" !== e && (k.Z.setHighlightColor(e), this.handleToggleHighlightAnnotation())
                    }))
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        intl: t
                    } = this.props;
                    return o()(u.Z, {
                        popupType: e.isMobile ? u.Z.PopupType.SlideUp : u.Z.PopupType.Popup,
                        originGap: 4,
                        onClose: this.handleClose,
                        onClick: this.handleButtonPopupClick,
                        renderOrigin: t => o()(c.Z, {
                            renderTooltip: () => o()(A, {}, void 0, o()("div", {}, void 0, o()(L.FormattedMessage, {
                                defaultMessage: "Text color",
                                id: "highlightSelectionButton.textColor.tooltip"
                            })), o()("div", {}, void 0, o()(B.Z, {
                                style: {
                                    color: this.theme.mediumInvertedTextColor
                                },
                                name: "toggleHighlight"
                            }))),
                            render: s => p().createElement(v.Z, n()({
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: 7,
                                    paddingRight: 6,
                                    whiteSpace: "nowrap",
                                    ...this.props.style
                                },
                                disabled: this.props.disabled,
                                disabledFeedback: this.props.disabled
                            }, (0, g.Z)(t, s)), o()("div", {
                                style: this.getColorIconStyle()
                            }, void 0, e.isMobile ? o()(L.FormattedMessage, {
                                defaultMessage: "Color",
                                id: "highlightSelectionButton.mobileColorIcon.label"
                            }) : "A"), f.Z.chevronDown({
                                width: 10,
                                marginLeft: e.isMobile ? 4 : 3,
                                fill: "dark" === this.theme.mode ? P.ZP.white : this.theme.lightIconColor
                            }))
                        }),
                        render: s => {
                            let i;
                            return i = e.isMobile ? {
                                menuType: M.ZP.MenuType.Modal,
                                title: o()(L.FormattedMessage, {
                                    defaultMessage: "Text color",
                                    id: "highlightSelectionButton.mobileTextColor.label"
                                }),
                                right: o()(G.CancelMenuText, {}),
                                onClickRight: () => {
                                    s.close()
                                }
                            } : {
                                menuType: M.ZP.MenuType.Popup
                            }, p().createElement(M.ZP, i, o()(T.Z, {
                                capture: e.isMobile,
                                store: this.stores.ignoreSelectionAreaStore,
                                ignoreBlockSelection: !1,
                                restoreSelection: !0,
                                focusOffscreenInput: !1,
                                render: e => {
                                    const i = P.CY.map((t => this.renderHighlightColorMenuItem(t, void 0, e, s))),
                                        r = [this.renderHighlightColorMenuItem("default", t.formatMessage({
                                            defaultMessage: "Default background",
                                            id: "highlightSelectionButton.defaultBackground.label"
                                        }), e, s), ...P._K.map((t => this.renderHighlightColorMenuItem(t, void 0, e, s)))],
                                        a = k.Z.state.color;
                                    return o()(b.Z, {
                                        type: b.Z.Type.Vertical,
                                        sections: [{
                                            key: 0,
                                            items: [{
                                                key: 0,
                                                action: () => {
                                                    e(), this.menuItemAction(a), s.close()
                                                },
                                                render: e => p().createElement(Z.Z, n()({}, e, {
                                                    color: a,
                                                    shortcuts: ["toggleHighlight"]
                                                }))
                                            }],
                                            render: e => p().createElement(y.Z, n()({}, e, {
                                                title: o()(L.FormattedMessage, {
                                                    defaultMessage: "Last used",
                                                    id: "highlightSelectionButton.lastUsedSection.label"
                                                }),
                                                isTitleUppercase: !0
                                            }))
                                        }, {
                                            key: 1,
                                            items: i,
                                            render: e => p().createElement(y.Z, n()({}, e, {
                                                title: o()(L.FormattedMessage, {
                                                    defaultMessage: "Color",
                                                    id: "highlightSelectionButton.colorSection.label"
                                                }),
                                                isTitleUppercase: !0
                                            }))
                                        }, {
                                            key: 2,
                                            items: r,
                                            render: e => p().createElement(y.Z, n()({}, e, {
                                                title: o()(L.FormattedMessage, {
                                                    defaultMessage: "Background",
                                                    id: "highlightSelectionButton.backgroundSection.label"
                                                }),
                                                isTitleUppercase: !0
                                            }))
                                        }],
                                        initialFocus: void 0
                                    })
                                }
                            }))
                        }
                    })
                }
                getTextSelectionColor() {
                    const e = (0, F.Ld)("h");
                    return e ? x.zI(e) : "default"
                }
                getColorIconStyle() {
                    const {
                        device: e
                    } = this.environment;
                    return {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 18,
                        textAlign: "center",
                        fontSize: 15,
                        borderRadius: 2,
                        ...!e.isMobile && {
                            width: 18,
                            fontWeight: C.Z.fontWeight.medium,
                            marginBottom: 2
                        },
                        ...(0, P.A_)(this.getTextSelectionColor(), this.theme)
                    }
                }
            }
            const U = (0, L.injectIntl)(R)
        },
        82945: (e, t, s) => {
            s.d(t, {
                Z: () => y
            });
            var i = s(67154),
                o = s.n(i),
                r = s(98135),
                n = s.n(r),
                a = s(59713),
                d = s.n(a),
                l = (s(33948), s(67294)),
                p = s.n(l),
                u = s(7476),
                m = s(66832),
                c = s(37235),
                g = s(94610),
                h = s(3779),
                v = s(50906),
                S = s(24666),
                f = s(14947),
                b = s(5366);
            class M extends m.Z {
                constructor(...e) {
                    super(...e), d()(this, "handleClick", (e => {
                        const t = S.default.state;
                        "editing" === t.mode && u.WD({
                            environment: this.environment,
                            blockStore: this.props.blockStore,
                            multiSelection: t.multiSelection
                        }), v.mt_(this.environment, {
                            action: "comment"
                        })
                    }))
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, t = e.isMobile;
                    return n()(c.Z, {
                        renderTooltip: () => n()(l.Fragment, {}, void 0, n()("div", {}, void 0, n()(b.FormattedMessage, {
                            defaultMessage: "Comment on selected text",
                            id: "inlineCommentButton.tooltip"
                        })), n()("div", {}, void 0, n()(g.Z, {
                            style: {
                                color: this.theme.mediumInvertedTextColor
                            },
                            name: "comment"
                        }))),
                        render: e => p().createElement(f.Z, o()({
                            style: {
                                display: "flex",
                                alignItems: "center",
                                padding: "0 8px",
                                whiteSpace: "nowrap",
                                ...this.props.style
                            },
                            disabled: this.props.disabled,
                            disabledFeedback: this.props.disabled,
                            onClick: this.handleClick
                        }, e), h.Z.speechBubbleThin({
                            width: t ? 18 : 16,
                            height: t ? 18 : 16,
                            marginTop: t ? 0 : 1,
                            marginRight: 4
                        }), !t && n()(b.FormattedMessage, {
                            defaultMessage: "Comment",
                            id: "inlineCommentButton.commentLabel"
                        }))
                    })
                }
            }
            const y = M
        },
        376: (e, t, s) => {
            s.d(t, {
                Z: () => M
            });
            var i = s(98135),
                o = s.n(i),
                r = s(67294),
                n = s.n(r),
                a = s(66832),
                d = s(29368),
                l = s(47714),
                p = s(9953),
                u = s(8646),
                m = s(50906),
                c = s(27832),
                g = s(74523),
                h = s(46951),
                v = s(5366),
                S = s(33665),
                f = s(23189);
            class b extends a.Z {
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        intl: t
                    } = this.props;
                    return o()("div", {}, void 0, this.renderNotificationHeader(), o()("div", {
                        style: this.getSettingsOptionStyle(),
                        className: "notifications-settings"
                    }, void 0, this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.mobilePushNotificationSettings.title",
                        defaultMessage: "Mobile push notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.mobilePushNotificationSettings.description",
                        defaultMessage: "Receive push notifications on mentions and comments via your mobile app."
                    }), "notify_mobile"), e.isElectron && o()(r.Fragment, {}, void 0, o()(d.Z, {
                        size: 24
                    }), this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.desktopNotificationSettings.title",
                        defaultMessage: "Desktop push notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.desktopNotificationSettings.description",
                        defaultMessage: "Receive push notifications on mentions and comments immediately via your desktop app."
                    }), "notify_desktop")), o()(d.Z, {
                        size: 24
                    }), this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.emailNotificationSettings.title",
                        defaultMessage: "Email notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.emailNotificationSettings.description",
                        defaultMessage: "Receive email updates on mentions, comments, and edit digests for all the pages you have followed."
                    }), "notify_email"), this.getSwitchValue("notify_email") && o()(n().Fragment, {}, void 0, o()(d.Z, {
                        size: 24
                    }), this.renderSettingsOption(t.formatMessage({
                        id: "notificationSettings.emailAlwaysNotificationSettings.title",
                        defaultMessage: "Always send email notifications"
                    }), t.formatMessage({
                        id: "notificationSettings.emailAlwaysNotificationSettings.description",
                        defaultMessage: "Receive updates by email, even when you’re active on the app."
                    }), "notify_email_always")), o()(d.Z, {
                        size: 24
                    }), o()("div", {
                        style: {
                            marginTop: 4
                        }
                    }, void 0, o()(g.Z, {
                        title: t.formatMessage({
                            id: "notificationSettings.helpButton.caption",
                            defaultMessage: "Learn about mobile and desktop notifications"
                        }),
                        href: (0, S.UY)("guides.notificationSettings"),
                        analyticsFrom: "notifications_settings"
                    }))))
                }
                renderNotificationHeader() {
                    const {
                        device: e
                    } = this.environment;
                    return o()(f.Z, {
                        large: !e.isMobile || void 0,
                        divider: "full"
                    }, void 0, o()(v.FormattedMessage, {
                        id: "notificationSettings.notificationSection.title",
                        defaultMessage: "Notifications"
                    }))
                }
                renderSettingsOption(e, t, s) {
                    const {
                        device: i
                    } = this.environment, r = this.getSwitchValue(s);
                    return o()("div", {
                        onClick: () => {
                            this.handleToggle(s), "notify_mobile" === s ? m.lyF(this.environment, {
                                is_on: !r
                            }) : "notify_desktop" === s ? m.ZL0(this.environment, {
                                is_on: !r
                            }) : ("notify_email" === s || "notify_email_always" === s) && m.b0T(this.environment, {
                                is_on: !r
                            })
                        },
                        style: {
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            cursor: "pointer"
                        }
                    }, void 0, o()("div", {
                        style: {
                            flex: 1
                        }
                    }, void 0, o()("div", {
                        style: {
                            fontSize: 14
                        }
                    }, void 0, e), o()(h.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%",
                            marginTop: 4
                        }
                    }, void 0, t)), o()(l.Z, {
                        on: Boolean(r),
                        disabled: void 0 === r,
                        isAndroid: i.isAndroid
                    }))
                }
                getSwitchValue(e) {
                    const {
                        currentSpaceViewStore: t
                    } = c.default.state;
                    if (t) {
                        const s = t.getValue();
                        if (s) return s[e]
                    }
                }
                handleToggle(e) {
                    const {
                        currentSpaceViewStore: t
                    } = c.default.state;
                    if (t) {
                        const s = t.getValue();
                        if (s) {
                            const i = s[e];
                            u.createAndCommit(this.environment, (s => {
                                p.sW({
                                    store: t,
                                    data: {
                                        [e]: !i
                                    },
                                    transaction: s
                                })
                            }))
                        }
                    }
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            const M = (0, v.injectIntl)(b)
        },
        1548: (e, t, s) => {
            s.d(t, {
                Z: () => F
            });
            var i = s(98135),
                o = s.n(i),
                r = s(59713),
                n = s.n(r),
                a = (s(33948), s(67294)),
                d = s(5366),
                l = s(7765),
                p = s(66832),
                u = s(12318),
                m = s(27832),
                c = s(69503),
                g = s(61269),
                h = s(47307),
                v = s(43250),
                S = s(15102),
                f = s(62727),
                b = s(47966),
                M = s(72693),
                y = s(13490),
                w = s(8848),
                P = s(46951),
                Z = s(33058),
                C = s(69972),
                k = s(96068),
                T = s(23189),
                I = s(33954),
                x = s(50906);
            class B extends p.Z {
                constructor(...e) {
                    super(...e), n()(this, "storeTypes", {
                        hasPasswordStore: u.Z.of(!1),
                        emailStore: u.Z.of("")
                    }), n()(this, "handleChangePasswordClick", (() => {
                        x.Wbl(this.environment), c.Z.setState({
                            open: !0,
                            setNewPassword: !0,
                            password: "",
                            repeatPassword: ""
                        })
                    })), n()(this, "handleOldPasswordChange", (e => {
                        (c.Z.isSetNewPasswordModal() || c.Z.isRemovePasswordModal()) && c.Z.setState({ ...c.Z.state,
                            oldPassword: e.target.value,
                            alert: void 0
                        })
                    })), n()(this, "handleClearOldPassword", (() => {
                        (c.Z.isSetNewPasswordModal() || c.Z.isRemovePasswordModal()) && c.Z.setState({ ...c.Z.state,
                            oldPassword: "",
                            alert: void 0
                        })
                    })), n()(this, "handlePasswordChange", (e => {
                        c.Z.isSetNewPasswordModal() && c.Z.setState({ ...c.Z.state,
                            password: e.target.value,
                            alert: void 0
                        })
                    })), n()(this, "handleCancelChangePassword", (() => {
                        const {
                            onCancel: e
                        } = c.Z.state;
                        c.Z.reset(), e && e()
                    })), n()(this, "handleClearPassword", (() => {
                        c.Z.isSetNewPasswordModal() && c.Z.setState({ ...c.Z.state,
                            password: "",
                            repeatPassword: "",
                            alert: void 0
                        })
                    })), n()(this, "handleRepeatPasswordChange", (e => {
                        c.Z.isSetNewPasswordModal() && c.Z.setState({ ...c.Z.state,
                            repeatPassword: e.target.value,
                            alert: void 0
                        })
                    })), n()(this, "handleClearRepeatPassword", (() => {
                        c.Z.isSetNewPasswordModal() && c.Z.setState({ ...c.Z.state,
                            repeatPassword: "",
                            alert: void 0
                        })
                    })), n()(this, "handlePasswordBlur", (() => {
                        if (c.Z.isSetNewPasswordModal()) {
                            const {
                                password: e,
                                repeatPassword: t
                            } = c.Z.state;
                            e && t && e !== t && c.Z.setState({ ...c.Z.state,
                                alert: this.props.intl.formatMessage({
                                    id: "passwordSettings.changePasswordModal.newPasswordMismatchError",
                                    defaultMessage: "Your new password does not match."
                                })
                            })
                        }
                    })), n()(this, "handleSubmit", (async () => {
                        if (!c.Z.isSetNewPasswordModal()) return;
                        const {
                            oldPassword: e,
                            password: t,
                            repeatPassword: s
                        } = c.Z.state, i = this.stores.hasPasswordStore.get(), {
                            intl: o
                        } = this.props;
                        let r;
                        if (i && !e) r = o.formatMessage({
                            id: "passwordSettings.changePasswordModal.oldPasswordMissingError",
                            defaultMessage: "Please enter your old password."
                        });
                        else if (t) {
                            const e = (0, k.I)(t);
                            e.success ? s ? t !== s && (r = o.formatMessage({
                                id: "passwordSettings.changePasswordModal.newPasswordsMismatchError",
                                defaultMessage: "Your passwords do not match."
                            })) : r = o.formatMessage({
                                id: "passwordSettings.changePasswordModal.newPasswordNotRepeatedError",
                                defaultMessage: "Please repeat your new password."
                            }) : r = this.getPasswordErrorMessage(e.reason)
                        } else r = o.formatMessage({
                            id: "passwordSettings.changePasswordModal.passwordNotEnteredError",
                            defaultMessage: "Please enter a password."
                        });
                        if (r) return void c.Z.setState({ ...c.Z.state,
                            alert: r
                        });
                        const n = await g.setPassword(this.environment, {
                            oldPassword: e,
                            newPassword: t
                        });
                        if ("success" === n.type) this.props.requestStore.refresh(), void 0 === e ? this.saveNewPasswordSuccess() : this.changePasswordSuccess();
                        else {
                            const e = (0, I.wf)(this.props.intl, n);
                            c.Z.setState({ ...c.Z.state,
                                alert: e
                            })
                        }
                    })), n()(this, "handleShowRemovePasswordModalClick", (() => {
                        c.Z.setState({
                            open: !0,
                            removePassword: !0,
                            oldPassword: ""
                        })
                    })), n()(this, "handleRemovePasswordClick", (async () => {
                        if (!c.Z.isRemovePasswordModal()) return;
                        const {
                            oldPassword: e
                        } = c.Z.state;
                        if (x.wrY(this.environment), !e) return void c.Z.setState({ ...c.Z.state,
                            alert: this.props.intl.formatMessage({
                                id: "passwordSettings.removePasswordModal.oldPasswordNotEnteredError",
                                defaultMessage: "Please enter your current password.",
                                description: "We require users to enter their password in a text box before they can delete it. This error message appears if the user attempts to delete their password but hasn't entered it into the text box."
                            })
                        });
                        const t = await g.setPassword(this.environment, {
                            oldPassword: e,
                            clearPassword: !0
                        });
                        if ("success" === t.type) this.props.requestStore.refresh(), this.removePasswordSuccess();
                        else {
                            const e = (0, I.wf)(this.props.intl, t);
                            c.Z.setState({ ...c.Z.state,
                                alert: e || this.props.intl.formatMessage({
                                    id: "passwordSettings.removePasswordModal.message",
                                    defaultMessage: "Error removing password. Please try again later."
                                })
                            })
                        }
                    })), n()(this, "defaultErrorMessage", this.props.intl.formatMessage({
                        id: "passwordSettings.genericPasswordSaveError",
                        defaultMessage: "Error saving password. Please try again later."
                    }))
                }
                willMount(e) {
                    super.willMount(e);
                    const {
                        currentUserStore: t
                    } = m.default.state;
                    if (t) {
                        const e = t.getValue();
                        e && this.stores.emailStore.set(e.email)
                    }
                }
                renderComponent() {
                    const e = this.stores.emailStore.get();
                    if (!e) return;
                    const {
                        requestStore: t
                    } = this.props;
                    return o()("div", {
                        style: this.getSettingsOptionStyle()
                    }, void 0, o()(T.Z, {
                        smallMarginBottom: !0
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.title",
                        defaultMessage: "Password"
                    })), o()(l.Z, {
                        request: {},
                        requestStore: t,
                        performRequest: async () => {
                            const t = await g.checkEmailType(this.environment, {
                                email: e,
                                allowAdminBypass: !0
                            });
                            if ("success" === t.type) {
                                const {
                                    samlRedirect: e,
                                    hasPassword: s
                                } = t.data;
                                return {
                                    samlEnforced: e && e.enforced,
                                    hasPassword: s
                                }
                            }
                            throw t.error
                        },
                        render: (e, t) => {
                            if (e) return B.renderLabel(o()(d.FormattedMessage, {
                                id: "passwordSettings.passwordSetError.message",
                                defaultMessage: "Your password cannot be set at this time. Please try again later."
                            }));
                            if (t) {
                                const {
                                    samlEnforced: e,
                                    hasPassword: s
                                } = t;
                                return e ? B.renderLabel(o()(d.FormattedMessage, {
                                    id: "passwordSettings.passwordManagedThroughSAMLProvider.message",
                                    defaultMessage: "Your password is managed through your SAML Single Sign-on Provider.",
                                    description: "Message letting users know that their password is managed through a 3rd-party provider, which is why they can't set their password on Notion's password settings page."
                                })) : (this.stores.hasPasswordStore.set(Boolean(s)), this.renderPasswordActions())
                            }
                        }
                    }))
                }
                renderPasswordActions() {
                    const {
                        isEducationPlan: e
                    } = this.props, t = this.stores.hasPasswordStore.get();
                    return o()(a.Fragment, {}, void 0, B.renderLabel(o()(d.FormattedMessage, {
                        id: "passwordSettings.passwordSetInstructions",
                        defaultMessage: "You can set a permanent password if you don't want to use temporary login codes."
                    })), e && B.renderLabel(this.renderEducationPlanInfo()), o()("div", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        }
                    }, void 0, o()(b.Z, {
                        isLarge: !0,
                        onClick: this.handleChangePasswordClick,
                        style: {
                            marginTop: 12,
                            marginBottom: 4
                        }
                    }, void 0, o()(d.FormattedMessage, t ? {
                        id: "passwordSettings.changePasswordButton.label",
                        defaultMessage: "Change password"
                    } : {
                        id: "passwordSettings.setPasswordButton.label",
                        defaultMessage: "Set a password"
                    })), this.canRemovePassword() && o()(Z.Z, {
                        onClick: this.handleShowRemovePasswordModalClick,
                        style: {
                            marginLeft: 5,
                            marginTop: 12,
                            marginBottom: 4
                        }
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.removePasswordButton.label",
                        defaultMessage: "Remove password"
                    }))), this.renderPasswordModal())
                }
                static renderLabel(e) {
                    return o()(P.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "80%"
                        }
                    }, void 0, e)
                }
                renderPasswordModal() {
                    const {
                        device: e
                    } = this.environment, {
                        open: t
                    } = c.Z.state;
                    return o()(S.Z, {
                        open: t,
                        onDismiss: this.handleCancelChangePassword,
                        innerStyle: {
                            width: e.isPhone ? "90%" : 460,
                            minHeight: 270,
                            padding: 24
                        },
                        className: v.BK,
                        preventHideChildrenWhileOpening: !0,
                        render: () => o()(C.Z, {
                            capture: !0,
                            allowEsc: !0,
                            render: () => o()(a.Fragment, {}, void 0, this.renderSaveNewPassword(), this.renderRemovePassword())
                        })
                    })
                }
                renderSaveNewPassword() {
                    const {
                        isEducationPlan: e
                    } = this.props;
                    if (!c.Z.isSetNewPasswordModal()) return;
                    const {
                        password: t,
                        repeatPassword: s,
                        oldPassword: i,
                        alert: r
                    } = c.Z.state, n = this.stores.hasPasswordStore.get(), l = this.stores.emailStore.get();
                    return o()(a.Fragment, {}, void 0, o()(f.Z, {
                        style: {
                            display: "none"
                        },
                        type: "text",
                        value: l,
                        autoComplete: "username",
                        disabled: !0
                    }), n && o()(a.Fragment, {}, void 0, o()(y.Z, {}, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.changePasswordModal.oldPasswordInput.label",
                        defaultMessage: "Old Password"
                    })), o()(f.Z, {
                        type: "password",
                        value: i,
                        onChange: this.handleOldPasswordChange,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearOldPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.oldPasswordInput.placeholder",
                            defaultMessage: "Enter old password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        focusInitial: !0,
                        autoComplete: "current-password"
                    })), n ? o()(y.Z, {
                        hasMarginTop: !0
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.newPasswordInput.label",
                        defaultMessage: "New password"
                    })) : o()(y.Z, {}, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.passwordInput.label",
                        defaultMessage: "Password"
                    })), o()(f.Z, {
                        type: "password",
                        value: t,
                        onChange: this.handlePasswordChange,
                        onSubmit: this.handleSubmit,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.newPasswordInput.placeholder",
                            defaultMessage: "Enter new password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        focusInitial: !n,
                        onBlur: this.handlePasswordBlur,
                        autoComplete: "new-password"
                    }), o()(y.Z, {
                        hasMarginTop: !0
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.repeatPasswordInput.label",
                        defaultMessage: "Repeat password"
                    })), o()(f.Z, {
                        type: "password",
                        value: s,
                        onChange: this.handleRepeatPasswordChange,
                        onSubmit: this.handleSubmit,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearRepeatPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.repeatPasswordInput.placeholder",
                            defaultMessage: "Repeat new password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        onBlur: this.handlePasswordBlur,
                        autoComplete: "new-password"
                    }), o()(P.Z, {
                        isMultiline: !0,
                        isSecondaryColor: !0,
                        style: {
                            marginTop: 14
                        }
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.passwordGuidelines",
                        defaultMessage: "Use a password at least 15 letters long, or at least 8 characters long with both letters and numbers."
                    })), e && o()(P.Z, {
                        isMultiline: !0,
                        isSecondaryColor: !0,
                        style: {
                            marginTop: 14
                        }
                    }, void 0, this.renderEducationPlanInfo()), this.renderAlert(r), o()(M.Z, {
                        isLarge: !0,
                        style: {
                            marginTop: 14
                        },
                        onClick: this.handleSubmit
                    }, void 0, o()(d.FormattedMessage, n ? {
                        id: "passwordSettings.changePasswordButton.label",
                        defaultMessage: "Change password"
                    } : {
                        id: "passwordSettings.setPasswordButton.label",
                        defaultMessage: "Set a password"
                    })))
                }
                renderRemovePassword() {
                    const {
                        isEducationPlan: e
                    } = this.props;
                    if (!c.Z.isRemovePasswordModal()) return;
                    const {
                        oldPassword: t,
                        alert: s
                    } = c.Z.state;
                    return o()(a.Fragment, {}, void 0, o()("div", {
                        style: {
                            fontSize: 14,
                            width: "100%"
                        }
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.removePasswordModal.text",
                        defaultMessage: "You're about to remove your password. We'll email you temporary login codes to access Notion going forward.",
                        description: "Message warning the user that they're about to delete their password, and telling them how to log in after their password has been deleted."
                    }), e && o()(d.FormattedMessage, {
                        id: "passwordSettings.removePasswordModal.educationPlanWarning",
                        defaultMessage: "If you lose access to your school email, you'll be unable to log back into Notion.",
                        description: "Warning for users on the Education Plan that if they lose access to their school email, they won't be able to log into Notion without a password."
                    })), o()(y.Z, {
                        hasMarginTop: !0
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.deletePasswordModal.passwordInput.label",
                        defaultMessage: "Password"
                    })), o()(f.Z, {
                        type: "password",
                        value: t,
                        onChange: this.handleOldPasswordChange,
                        onSubmit: this.handleRemovePasswordClick,
                        showClearButton: !0,
                        onClearButtonClick: this.handleClearOldPassword,
                        placeholder: this.props.intl.formatMessage({
                            id: "passwordSettings.removePasswordModal.passwordInput.placeholder",
                            defaultMessage: "Enter your password..."
                        }),
                        style: {
                            padding: "4px 8px"
                        },
                        focusInitial: !0,
                        autoComplete: "current-password"
                    }), this.renderAlert(s), o()(M.Z, {
                        isLarge: !0,
                        style: {
                            marginTop: 14
                        },
                        onClick: this.handleRemovePasswordClick
                    }, void 0, o()(d.FormattedMessage, {
                        id: "passwordSettings.removePasswordModal.removePasswordButton.label",
                        defaultMessage: "Remove password"
                    })))
                }
                renderAlert(e) {
                    if (e) return o()(P.Z, {
                        isMultiline: !0,
                        style: {
                            marginTop: 8,
                            color: w.ZP.red
                        }
                    }, void 0, e)
                }
                renderEducationPlanInfo() {
                    return o()(d.FormattedMessage, {
                        id: "passwordSettings.educationPlanGuidelines",
                        defaultMessage: "If you lose access to your school email address, you'll be able to log in using your password."
                    })
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
                saveNewPasswordSuccess() {
                    const {
                        intl: e,
                        isEducationPlan: t
                    } = this.props, {
                        onSubmit: s
                    } = c.Z.state;
                    c.Z.reset();
                    const i = t ? e.formatMessage({
                        id: "passwordSettings.setPasswordSuccess.educationMessage",
                        defaultMessage: "Your password is all set! You'll be able to log in, even if you lose access to your school email address."
                    }) : e.formatMessage({
                        id: "passwordSettings.setPasswordSuccess.message",
                        defaultMessage: "Your password is all set!"
                    });
                    h.showMessage({
                        message: i,
                        onAccept: s
                    })
                }
                changePasswordSuccess() {
                    const {
                        onSubmit: e
                    } = c.Z.state;
                    c.Z.reset(), h.showMessage({
                        message: this.props.intl.formatMessage({
                            id: "passwordSettings.changePasswordSuccess.message",
                            defaultMessage: "Your new password has been saved."
                        }),
                        onAccept: e
                    })
                }
                removePasswordSuccess() {
                    c.Z.reset(), h.showMessage({
                        message: this.props.intl.formatMessage({
                            id: "passwordSettings.removePasswordSuccess.message",
                            defaultMessage: "Your password has been removed."
                        })
                    })
                }
                getPasswordErrorMessage(e) {
                    const t = I.Ql[e.type];
                    return t ? this.props.intl.formatMessage(t) : this.defaultErrorMessage
                }
                canRemovePassword() {
                    const {
                        isEducationPlan: e
                    } = this.props, t = this.stores.hasPasswordStore.get();
                    return !e && t
                }
            }
            const F = (0, d.injectIntl)(B)
        },
        40464: (e, t, s) => {
            s.d(t, {
                Z: () => M
            });
            var i = s(98135),
                o = s.n(i),
                r = s(67154),
                n = s.n(r),
                a = s(59713),
                d = s.n(a),
                l = (s(33948), s(67294)),
                p = s.n(l),
                u = s(98724),
                m = s(66832),
                c = s(37235),
                g = s(50906),
                h = s(24666),
                v = s(14947),
                S = s(8848),
                f = s(89086);
            class b extends m.Z {
                constructor(...e) {
                    super(...e), d()(this, "handleClick", (e => {
                        u.aS({
                            environment: this.environment,
                            annotation: [this.props.type]
                        }), this.props.onClick && this.props.onClick(), g.mt_(this.environment, {
                            action: this.props.type
                        })
                    })), d()(this, "isDisabledStore", this.createComputedStore((() => this.props.disabled || "editing" !== h.default.state.mode)))
                }
                renderComponent() {
                    return o()(c.Z, {
                        renderTooltip: () => this.props.tooltipLabel,
                        render: e => p().createElement(v.Z, n()({
                            style: this.getButtonStyle(),
                            disabled: this.isDisabledStore.state,
                            disabledFeedback: this.isDisabledStore.state,
                            onClick: this.handleClick
                        }, e), this.props.children)
                    })
                }
                getButtonStyle() {
                    return {
                        display: "flex",
                        alignItems: "center",
                        padding: "0 8px",
                        color: (0, f.Ld)(this.props.type) ? S.ZP.blue : this.theme.regularTextColor,
                        ...this.props.style
                    }
                }
            }
            const M = b
        },
        32404: (e, t, s) => {
            s.d(t, {
                Z: () => w
            });
            var i = s(67154),
                o = s.n(i),
                r = s(98135),
                n = s.n(r),
                a = s(59713),
                d = s.n(a),
                l = (s(33948), s(67294)),
                p = s.n(l),
                u = s(70203),
                m = s(14947),
                c = s(36280),
                g = s(66949),
                h = s(89086),
                v = s(5366),
                S = s(94610),
                f = s(66832),
                b = s(37235),
                M = s(24666);
            class y extends f.Z {
                constructor(...e) {
                    super(...e), d()(this, "renderMenuTooltip", (() => {
                        const e = this.getThemeColors();
                        return n()(p().Fragment, {}, void 0, n()("div", {}, void 0, n()(v.FormattedMessage, {
                            id: "richTextMenu.equationButton.tooltip",
                            defaultMessage: "Create equation"
                        })), n()("div", {}, void 0, n()(S.Z, {
                            style: e.keyboardShortcut,
                            name: "openEquationMenu"
                        })))
                    })), d()(this, "handleButtonPopupClick", (e => {
                        const {
                            onClick: t
                        } = this.props;
                        c.qn({
                            environment: this.environment,
                            analyticsFrom: "rich_text_menu"
                        }), t && t(e)
                    })), d()(this, "isSelected", (() => (0, h.Ld)(u.GK.Equation))), d()(this, "isDisabled", (() => {
                        const {
                            disabled: e
                        } = this.props;
                        if (e) return !0;
                        if ("editing" !== M.default.state.mode && !g.Z.isOpen()) return !0;
                        const t = {
                            [u.GK.User]: u.GK.User,
                            [u.GK.Page]: u.GK.Page,
                            [u.GK.Bot]: u.GK.Bot,
                            [u.GK.Date]: u.GK.Date,
                            [u.GK.ExternalObjectInstance]: u.GK.ExternalObjectInstance,
                            [u.GK.TemporaryPage]: u.GK.TemporaryPage,
                            [u.GK.TemplateVariable]: u.GK.TemplateVariable
                        };
                        for (const s of Object.values(t))
                            if ((0, h.J6)(s)) return !0;
                        return !1
                    })), d()(this, "styles", {
                        equationButton: {
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 0,
                            paddingLeft: 7,
                            paddingRight: 8
                        }
                    })
                }
                renderComponent() {
                    const {
                        style: e,
                        children: t
                    } = this.props, s = this.getThemeColors(), i = this.isDisabled();
                    return n()(b.Z, {
                        renderTooltip: this.renderMenuTooltip,
                        render: r => p().createElement(m.Z, o()({
                            style: { ...this.styles.equationButton,
                                ...s.equationButton,
                                ...e
                            },
                            disabled: i,
                            disabledFeedback: i,
                            onClick: this.handleButtonPopupClick
                        }, r), t)
                    })
                }
                getThemeColors() {
                    return {
                        equationButton: {
                            color: this.isSelected() ? this.theme.blueColor : this.theme.regularTextColor
                        },
                        keyboardShortcut: {
                            color: this.theme.mediumInvertedTextColor
                        }
                    }
                }
            }
            const w = (0, v.injectIntl)(y)
        },
        73383: (e, t, s) => {
            s.d(t, {
                Z: () => P
            });
            var i = s(67154),
                o = s.n(i),
                r = s(98135),
                n = s.n(r),
                a = s(59713),
                d = s.n(a),
                l = (s(33948), s(67294)),
                p = s.n(l),
                u = s(45990),
                m = s(66832),
                c = s(37235),
                g = s(94610),
                h = s(50906),
                v = s(14947),
                S = s(24666),
                f = s(23178),
                b = s(89086),
                M = s(5366),
                y = s(70203);
            class w extends m.Z {
                constructor(...e) {
                    super(...e), d()(this, "handleButtonPopupClick", (() => {
                        u.dz({
                            type: "focusOnly",
                            focus: !0
                        }), h.mt_(this.environment, {
                            action: y.GK.Link
                        })
                    }))
                }
                renderComponent() {
                    const e = (0, b.Ld)(y.GK.Link),
                        t = this.isDisabled();
                    return n()(c.Z, {
                        renderTooltip: () => n()(l.Fragment, {}, void 0, n()("div", {}, void 0, n()(M.FormattedMessage, {
                            defaultMessage: "Add link",
                            id: "selectionLinkButton.addLink.tooltip",
                            description: "Prompt for the user to add a URL to link to from the selected text."
                        })), n()("div", {}, void 0, n()(g.Z, {
                            style: {
                                color: this.theme.mediumInvertedTextColor
                            },
                            name: "openLinkMenu"
                        }))),
                        render: s => p().createElement(v.Z, o()({
                            style: {
                                display: "flex",
                                alignItems: "center",
                                borderRadius: 0,
                                paddingLeft: 7,
                                paddingRight: 8,
                                ...e && {
                                    color: this.theme.blueColor
                                },
                                whiteSpace: "nowrap",
                                ...this.props.style
                            },
                            disabled: t,
                            disabledFeedback: t
                        }, s, {
                            onClick: this.handleButtonPopupClick
                        }), this.props.children)
                    })
                }
                isDisabled() {
                    return !!this.props.disabled || ("editing" !== S.default.state.mode && !f.Z.state.open || !!((0, b.J6)(y.GK.User) || (0, b.J6)(y.GK.Bot) || (0, b.J6)(y.GK.Date) || (0, b.J6)(y.GK.Page)))
                }
            }
            const P = (0, M.injectIntl)(w)
        },
        27386: (e, t, s) => {
            s.d(t, {
                Z: () => l
            });
            var i = s(98135),
                o = s.n(i),
                r = (s(67294), s(29368)),
                n = s(592),
                a = s(66832);
            class d extends a.Z {
                static renderDivider() {
                    return o()(r.Z, {
                        size: 37
                    })
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        children: t,
                        controlRow: s
                    } = this.props, i = () => e.isMobile ? 18 : 60, r = () => e.isMobile ? 18 : 36;
                    return this.props.disableScroller ? o()("div", {
                        style: {
                            paddingLeft: i(),
                            paddingRight: i()
                        }
                    }, void 0, o()("div", {
                        style: {
                            paddingTop: r(),
                            paddingBottom: r()
                        }
                    }, void 0, t), s && o()("div", {
                        style: {
                            paddingTop: 16,
                            paddingBottom: 16,
                            boxShadow: "0 -1px 0 ".concat(this.theme.regularDividerColor)
                        }
                    }, void 0, s)) : o()("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            backgroundColor: this.theme.cardContentBackground
                        }
                    }, void 0, o()(n.ZP, {
                        type: n.xm.All,
                        style: {
                            flexGrow: 1,
                            WebkitOverflowScrolling: "touch",
                            transform: "translateZ(0)",
                            paddingLeft: i(),
                            paddingRight: i(),
                            paddingTop: r(),
                            paddingBottom: r()
                        }
                    }, void 0, t), s && o()("div", {
                        style: {
                            flexGrow: 0,
                            flexShrink: 0,
                            paddingLeft: i(),
                            paddingRight: i(),
                            paddingTop: 16,
                            paddingBottom: 16,
                            boxShadow: "0 -1px 0 ".concat(this.theme.regularDividerColor)
                        }
                    }, void 0, s))
                }
            }
            const l = d
        },
        58280: (e, t, s) => {
            s.d(t, {
                Z: () => st
            });
            var i = s(67154),
                o = s.n(i),
                r = s(98135),
                n = s.n(r),
                a = s(59713),
                d = s.n(a),
                l = (s(33948), s(96486)),
                p = s.n(l),
                u = s(67294),
                m = s.n(u),
                c = s(58059),
                g = s(27006),
                h = s(19889),
                v = s(76464),
                S = s(29974),
                f = s(31942),
                b = s(64404),
                M = s(38978),
                y = s(66832),
                w = s(29368),
                P = s(26111),
                Z = s(26435),
                C = s(61766),
                k = s(46167),
                T = s(25584),
                I = s(95009),
                x = s(24042),
                B = s(83071),
                F = s(16328),
                L = s(47307),
                G = s(61269),
                A = s(21325),
                R = s(84210),
                U = s(8646),
                E = s(37235),
                D = s(86646),
                O = s(50906),
                N = s(92625),
                _ = s(47966),
                V = s(42001),
                H = s(3779),
                W = s(1643),
                z = s(78291),
                K = s(5366),
                q = s(21202);
            const j = (0, K.defineMessages)({
                removingGuest: {
                    id: "guestPagesPopup.removeGuest.updatingMessage",
                    defaultMessage: "Updating…"
                },
                addingMember: {
                    id: "guestPagesPopup.addMemberPermission.updatingMessage",
                    defaultMessage: "Updating…"
                }
            });
            class Y extends y.Z {
                constructor(...e) {
                    super(...e), d()(this, "storeTypes", {
                        buttonPopupStore: C.Z
                    }), d()(this, "renderPopup", (() => {
                        const {
                            device: e
                        } = this.environment, {
                            store: t,
                            guest: s
                        } = this.props, i = t.canAdmin(), r = s.guestPageIds.map((e => {
                            const s = Z.Z.createChildStore(t, {
                                table: q.iU,
                                id: e
                            });
                            return {
                                key: e,
                                render: e => m().createElement(x.Z, o()({}, e, {
                                    store: s,
                                    placeholder: n()(K.FormattedMessage, {
                                        id: "guestPagesPopup.privatePagePlaceholder",
                                        defaultMessage: "Private page"
                                    })
                                })),
                                action: () => {
                                    const s = Z.Z.createChildStore(t, {
                                            table: q.iU,
                                            id: e
                                        }),
                                        i = (0, R.Z)({
                                            store: s,
                                            fullyQualified: !1
                                        });
                                    P.navigate({
                                        environment: this.environment,
                                        url: i,
                                        metaClick: !0
                                    })
                                }
                            }
                        }));
                        let a, d;
                        return a = e.isMobile ? {
                            menuType: I.ZP.MenuType.ActionSheet
                        } : {
                            menuType: I.ZP.MenuType.Popup,
                            width: 300
                        }, (0, W.qF)(this.environment) && (d = n()(E.Z, {
                            renderTooltip: () => this.isSubscribed() ? n()(K.FormattedMessage, {
                                id: "guestPagesPopup.addMemberPermissionButton.tooltip",
                                defaultMessage: "This guest will become a member of this workspace."
                            }) : n()(K.FormattedMessage, {
                                id: "guestPagesPopup.addAdminPermissionButton.tooltip",
                                defaultMessage: "This guest will become an admin of this workspace."
                            }),
                            render: e => m().createElement(_.Z, o()({
                                isLarge: !0,
                                onClick: this.handleConvertToMemberClick
                            }, e), this.isSubscribed() ? n()(K.FormattedMessage, {
                                id: "guestPagesPopup.addMemberPermissionButton.label",
                                defaultMessage: "Convert to member"
                            }) : n()(K.FormattedMessage, {
                                id: "guestPagesPopup.addAdminPermissionButton.label",
                                defaultMessage: "Convert to admin"
                            }))
                        })), m().createElement(I.ZP, a, i && n()(D.Z, {
                            title: n()("div", {
                                style: {
                                    paddingTop: 12,
                                    paddingBottom: 8,
                                    display: "flex",
                                    alignItems: "flex-start"
                                }
                            }, void 0, d, n()(E.Z, {
                                renderTooltip: () => n()(K.FormattedMessage, {
                                    id: "guestPagesPopup.removeGuestButton.tooltip",
                                    defaultMessage: "This guest will be removed from all pages in this Workspace."
                                }),
                                render: e => m().createElement(_.Z, o()({
                                    isLarge: !0,
                                    isRed: !0,
                                    style: {
                                        marginLeft: d ? 8 : 0
                                    },
                                    onClick: this.handleRemoveClick
                                }, e), n()(K.FormattedMessage, {
                                    id: "guestPagesPopup.removeGuestButton.label",
                                    defaultMessage: "Remove"
                                }))
                            }))
                        }), i && n()(F.Z, {
                            title: n()(K.FormattedMessage, {
                                id: "guestPagesPopup.guestAccessiblePagesCaption",
                                defaultMessage: "This guest can access these pages"
                            })
                        }), n()(T.Z, {
                            type: T.Z.Type.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: "pages",
                                render: e => m().createElement(B.Z, e),
                                items: r
                            }]
                        }))
                    })), d()(this, "handleRemoveClick", (() => {
                        L.showDialog({
                            showCancel: !0,
                            keepFocus: !1,
                            message: n()(K.FormattedMessage, {
                                id: "guestPagesPopup.removeGuestModal.confirmationMessage",
                                defaultMessage: "Are you sure you want to remove this person? They will lose access to all shared pages."
                            }),
                            items: [{
                                label: n()(K.FormattedMessage, {
                                    id: "guestPagesPopup.removeGuestModal.removeButton.label",
                                    defaultMessage: "Remove"
                                }),
                                color: "red",
                                onAccept: async () => {
                                    const {
                                        guest: e,
                                        store: t
                                    } = this.props;
                                    this.stores.buttonPopupStore.setState({ ...this.stores.buttonPopupStore.state,
                                        open: !1
                                    }), N.j({
                                        message: j.removingGuest
                                    });
                                    "success" === (await G.removeUsersFromSpace(this.environment, {
                                        userIds: [e.userId],
                                        spaceId: t.id,
                                        removePagePermissions: !0,
                                        revokeUserTokens: !1
                                    })).type && (await A.bi(this.environment), O.bwR(this.environment)), N.x()
                                }
                            }]
                        })
                    })), d()(this, "handleConvertToMemberClick", (async () => {
                        const e = U.create(this.environment),
                            {
                                store: t,
                                guest: s,
                                isSubscribed: i
                            } = this.props,
                            o = v.ep({
                                environment: this.environment,
                                store: t,
                                permissionItems: [{
                                    type: "user_permission",
                                    role: i ? "read_and_write" : "editor",
                                    user_id: s.userId
                                }],
                                transaction: e
                            });
                        U.commit({
                            environment: this.environment,
                            transaction: e
                        }), this.stores.buttonPopupStore.setState({ ...this.stores.buttonPopupStore.state,
                            open: !1
                        }), N.j({
                            message: j.addingMember
                        });
                        try {
                            await o, await A.bi(this.environment), O.Rbv(this.environment, {
                                member_user_id: s.userId
                            })
                        } finally {
                            N.x()
                        }
                    }))
                }
                renderComponent() {
                    const {
                        device: e
                    } = this.environment, {
                        buttonPopupStore: t
                    } = this.stores, {
                        store: s,
                        guest: i
                    } = this.props;
                    return i.guestPageIds.map((e => {
                        Z.Z.createChildStore(s, {
                            table: q.iU,
                            id: e
                        }).getValue()
                    })), 0 === i.guestPageIds.length ? n()(K.FormattedMessage, {
                        id: "guestPagesPopup.permissionsForUserGuest.label",
                        defaultMessage: "Guest"
                    }) : n()(k.Z, {
                        popupType: e.isMobile ? k.Z.PopupType.SlideUp : k.Z.PopupType.Popup,
                        renderOrigin: e => m().createElement(V.Z, e, n()(K.FormattedMessage, {
                            id: "guestPagesButton.label",
                            defaultMessage: "{numberOfAccessiblePages, plural, one {{numberOfAccessiblePages} page} other {{numberOfAccessiblePages} pages}}",
                            values: {
                                numberOfAccessiblePages: i.guestPageIds.length
                            }
                        }), H.Z.chevronDown({
                            width: 10,
                            marginLeft: 4,
                            fill: this.theme.lightIconColor
                        })),
                        buttonPopupStore: t,
                        render: this.renderPopup
                    })
                }
                isSubscribed() {
                    const {
                        data: e
                    } = z.default.state;
                    return Boolean(e && (0, W.YK)(e))
                }
            }
            const J = (0, K.injectIntl)(Y);
            var Q = s(62727),
                X = s(7567),
                $ = s(27386),
                ee = s(40235),
                te = s(66957),
                se = s(75246),
                ie = s(41493),
                oe = s(40039),
                re = s(52016);
            class ne extends re.Z {
                getInitialState() {
                    return {
                        userInputValue: "",
                        temporaryUserIds: [],
                        limitUsers: !0
                    }
                }
            }
            const ae = ne;
            var de = s(66722),
                le = s(58945),
                pe = s(44517),
                ue = s(7765),
                me = s(31299),
                ce = s(97680),
                ge = s(47082),
                he = s(13548),
                ve = s(31792),
                Se = s(69152),
                fe = s(12534),
                be = s(62619),
                Me = s(89206),
                ye = s(49312),
                we = s(82990),
                Pe = s(22808),
                Ze = s(22294),
                Ce = s(72693),
                ke = s(80527),
                Te = s(33728),
                Ie = s(27832),
                xe = s(43997),
                Be = s(16639),
                Fe = s(90965),
                Le = s(26524),
                Ge = s(8848);
            class Ae extends y.Z {
                constructor(...e) {
                    super(...e), d()(this, "storeTypes", {
                        spacePermissionGroupStore: ae,
                        actionMenuButtonPopupStore: C.Z,
                        addMemberButtonPopupStore: C.Z,
                        autocompleteStore: pe.Z,
                        mouseStore: ve.Z
                    }), d()(this, "renderUser", (e => {
                        const {
                            store: t,
                            group: s,
                            disabled: i
                        } = this.props, o = !!t.state.value && (0, Fe.wv)(t.state.value, e.id);
                        return n()("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }, e.id, n()("div", {
                            style: {
                                display: "flex"
                            }
                        }, void 0, n()(ie.Z, {
                            userValue: e,
                            style: {
                                paddingRight: 6,
                                minHeight: 34,
                                lineHeight: 1.2,
                                width: "100%"
                            },
                            avatarSize: 24
                        }), o && n()(Le.Z, {}, void 0, n()(K.FormattedMessage, {
                            id: "spacePermissionsSettings.user.admin",
                            defaultMessage: "Admin"
                        }))), !i && n()(V.Z, {
                            isGray: !0,
                            hoveredStyle: {
                                color: Ge.ZP.red
                            },
                            onClick: async () => {
                                if (await L.confirmUserAction({
                                        message: n()(K.FormattedMessage, {
                                            id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationMessage",
                                            defaultMessage: "Are you sure you want to remove this member?"
                                        }),
                                        acceptLabel: n()(K.FormattedMessage, {
                                            id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationButton.label",
                                            defaultMessage: "Yes"
                                        })
                                    })) {
                                    const i = (s.user_ids || []).filter((t => t !== e.id)),
                                        o = { ...s,
                                            user_ids: i
                                        };
                                    U.createAndCommit(this.environment, (e => {
                                        S.jF({
                                            spaceStore: t,
                                            group: o,
                                            transaction: e
                                        })
                                    })), O.xtf(this.environment)
                                }
                            }
                        }, void 0, n()(K.FormattedMessage, {
                            id: "spacePermissionsSettings.groupsTab.removeMemberFromGroupButton.label",
                            defaultMessage: "Remove"
                        })))
                    })), d()(this, "renderActionMenu", (() => {
                        const e = {
                            key: "action_menu",
                            render: e => m().createElement(B.Z, e),
                            items: [{
                                key: "rename",
                                render: e => m().createElement(le.Z, o()({}, e, {
                                    title: n()(K.FormattedMessage, {
                                        id: "spacePermissionsSettings.groupsTab.groupList.actionMenu.renameItem",
                                        defaultMessage: "Rename"
                                    })
                                })),
                                action: this.handleRename
                            }, {
                                key: "delete",
                                render: e => m().createElement(le.Z, o()({}, e, {
                                    title: n()(K.FormattedMessage, {
                                        id: "spacePermissionsSettings.groupsTab.groupList.actionMenu.deleteItem",
                                        defaultMessage: "Delete"
                                    })
                                })),
                                action: this.handleDelete
                            }]
                        };
                        return n()(I.ZP, {
                            menuType: I.ZP.MenuType.Popup
                        }, void 0, n()(T.Z, {
                            type: T.Z.Type.Vertical,
                            initialFocus: 0,
                            sections: [e],
                            onAccept: () => {
                                this.stores.actionMenuButtonPopupStore.reset()
                            }
                        }))
                    })), d()(this, "renderAddMemberMenu", (() => {
                        const {
                            store: e
                        } = this.props, {
                            userInputValue: t,
                            temporaryUserIds: s
                        } = this.stores.spacePermissionGroupStore.state, i = {
                            request: {
                                query: t,
                                temporaryUserIds: this.stores.spacePermissionGroupStore.state.temporaryUserIds
                            },
                            performRequest: async ({
                                query: e,
                                temporaryUserIds: t
                            }) => {
                                const {
                                    group: s
                                } = this.props, i = s.user_ids || [];
                                return (await me.O$({
                                    environment: this.environment,
                                    query: e,
                                    membersOnly: !0
                                })).filter((e => i.indexOf(e.id) < 0 && t.indexOf(e.id) < 0)).slice(0, 20)
                            },
                            render: this.renderAddMemberResults
                        }, o = s.map((t => {
                            const i = e.getRecordValue({
                                table: h.KJ,
                                id: t
                            });
                            return n()(xe.vw, {
                                userValue: i,
                                format: xe.vw.Format.Medium,
                                showRemoveButton: !0,
                                onClickRemove: () => {
                                    const e = s.filter((e => e !== t));
                                    this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
                                        temporaryUserIds: e
                                    })
                                },
                                shouldShrink: !0,
                                isSingle: !1
                            }, t)
                        }));
                        return n()(I.ZP, {
                            menuType: I.ZP.MenuType.Popup,
                            tokenInputHeader: !0,
                            header: n()(ge.Z, {
                                focus: !0,
                                disabled: !1,
                                focusAfterAnimation: !0,
                                format: ge.Z.Format.Group,
                                tokens: o,
                                placeholder: this.props.intl.formatMessage({
                                    id: "spacePermissionsSettings.groupsTab.userGroup.userSearchInput.placeholder",
                                    defaultMessage: "Search for a person…"
                                }),
                                onRemoveLastToken: this.handleTokenInputMenuItemRemoveLastToken,
                                value: t,
                                onChange: this.handleTokenInputMenuItemChange,
                                right: n()(Ce.Z, {
                                    isLarge: !0,
                                    onClick: this.handleAddDoneClick
                                }, void 0, n()(K.FormattedMessage, {
                                    id: "spacePermissionsSettings.groupsTab.userGroup.addUserButton.label",
                                    defaultMessage: "Add"
                                }))
                            })
                        }, void 0, m().createElement(ue.Z, i))
                    })), d()(this, "renderAddMemberResults", ((e, t) => {
                        const {
                            store: s
                        } = this.props, i = t || [], {
                            temporaryUserIds: r
                        } = this.stores.spacePermissionGroupStore.state, a = i.map((({
                            id: e
                        }) => e));
                        if (0 === a.length) return n()(B.Z, {}, void 0, n()(F.Z, {
                            title: n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.userGroup.searchUserDropdown.noResultsMessage",
                                defaultMessage: "No results"
                            })
                        })); {
                            const e = {
                                key: "user_menu",
                                render: e => m().createElement(B.Z, e),
                                items: a.map((e => {
                                    const t = M.Z.createChildStore(s, {
                                        table: h.KJ,
                                        id: e
                                    }).getValue();
                                    return {
                                        key: e,
                                        render: e => m().createElement(ce.Z, o()({}, e, {
                                            user: t
                                        })),
                                        action: () => {
                                            const t = [...r, e];
                                            this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
                                                temporaryUserIds: t,
                                                userInputValue: ""
                                            })
                                        }
                                    }
                                }))
                            };
                            return n()(T.Z, {
                                type: T.Z.Type.Vertical,
                                initialFocus: 0,
                                sections: [e]
                            })
                        }
                    })), d()(this, "handleMouseEnter", (e => {
                        this.stores.mouseStore.setState({ ...this.stores.mouseStore.state,
                            mouseEntered: !0
                        })
                    })), d()(this, "handleMouseLeave", (e => {
                        this.stores.mouseStore.setState({ ...this.stores.mouseStore.state,
                            mouseEntered: !1
                        })
                    })), d()(this, "handleMouseDown", (e => {
                        (0, be.sh)(e.target, (e => e && e.classList && e.classList.contains(Ae.dragHandleClass))) || (0, fe.$0)(e)
                    })), d()(this, "handleIconChange", (e => {
                        const {
                            store: t,
                            group: s
                        } = this.props, i = { ...s,
                            icon: e
                        };
                        U.createAndCommit(this.environment, (e => {
                            S.jF({
                                spaceStore: t,
                                group: i,
                                transaction: e
                            })
                        })), O.zUE(this.environment, {
                            is_emoji: (0, Pe.Z)(e)
                        })
                    })), d()(this, "handleRename", (() => {
                        const {
                            group: e,
                            spacePermissionsSettingsStore: t
                        } = this.props;
                        t.setState({ ...t.state,
                            editingNameGroupId: e.id,
                            groupNameInputValue: e.name || ""
                        }), this.stores.actionMenuButtonPopupStore.setState({ ...this.stores.actionMenuButtonPopupStore.state,
                            open: !1
                        }), O.XbW(this.environment)
                    })), d()(this, "handleDelete", (async () => {
                        const {
                            store: e,
                            group: t
                        } = this.props;
                        this.stores.actionMenuButtonPopupStore.setState({ ...this.stores.actionMenuButtonPopupStore.state,
                            open: !1
                        });
                        if (await L.confirmUserAction({
                                message: n()(K.FormattedMessage, {
                                    id: "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationMessage",
                                    defaultMessage: "Are you sure you want to delete this group? Any pages that are private to this group will be transferred to you."
                                }),
                                acceptLabel: n()(K.FormattedMessage, {
                                    id: "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationButton.label",
                                    defaultMessage: "Yes"
                                })
                            })) {
                            const s = U.create(this.environment);
                            await S.Xv({
                                environment: this.environment,
                                spaceStore: e,
                                group: t,
                                transaction: s
                            }), U.commit({
                                environment: this.environment,
                                transaction: s
                            }), O.dan(this.environment)
                        }
                    })), d()(this, "handleNameChange", (e => {
                        this.props.spacePermissionsSettingsStore.setState({ ...this.props.spacePermissionsSettingsStore.state,
                            groupNameInputValue: e
                        })
                    })), d()(this, "handleNameCancel", (() => {
                        const {
                            spacePermissionsSettingsStore: e
                        } = this.props;
                        e.setState({ ...e.state,
                            editingNameGroupId: void 0,
                            groupNameInputValue: ""
                        })
                    })), d()(this, "handleNameAccept", (() => {
                        const {
                            store: e,
                            group: t,
                            spacePermissionsSettingsStore: s
                        } = this.props, {
                            editingNameGroupId: i,
                            groupNameInputValue: o
                        } = s.state;
                        if (i === t.id) {
                            if (o !== t.name) {
                                const s = { ...t,
                                    name: o
                                };
                                U.createAndCommit(this.environment, (t => {
                                    S.jF({
                                        spaceStore: e,
                                        group: s,
                                        transaction: t
                                    })
                                }))
                            }
                            s.setState({ ...s.state,
                                editingNameGroupId: void 0,
                                groupNameInputValue: ""
                            })
                        }
                    })), d()(this, "handleTokenInputMenuItemRemoveLastToken", (() => {
                        const {
                            temporaryUserIds: e
                        } = this.stores.spacePermissionGroupStore.state, t = e.slice(0, e.length - 1);
                        this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
                            temporaryUserIds: t
                        })
                    })), d()(this, "handleTokenInputMenuItemChange", (e => {
                        const t = e.target.value,
                            {
                                spacePermissionGroupStore: s
                            } = this.stores,
                            {
                                extractedEmails: i,
                                newInputValue: o
                            } = (0, Te.zI)(t),
                            {
                                currentSpaceStore: r
                            } = Ie.default.state,
                            {
                                data: n
                            } = z.default.state;
                        if (!n || !r) return;
                        const a = (0, W.uF)(n).map((e => e.userId)),
                            d = p().compact(a.map((e => M.Z.createChildStore(r, {
                                table: h.KJ,
                                id: e
                            }).getValue()))).filter((e => i.includes(e.email) && !s.state.temporaryUserIds.includes(e.id)));
                        s.setState({ ...s.state,
                            temporaryUserIds: [...s.state.temporaryUserIds, ...d.map((e => e.id))],
                            userInputValue: o
                        })
                    })), d()(this, "handleAddDoneClick", (() => {
                        const {
                            store: e,
                            group: t
                        } = this.props, {
                            temporaryUserIds: s
                        } = this.stores.spacePermissionGroupStore.state, i = t.user_ids || [], o = p().union(i, s), r = { ...t,
                            user_ids: o
                        };
                        U.createAndCommit(this.environment, (t => {
                            S.jF({
                                spaceStore: e,
                                group: r,
                                transaction: t
                            })
                        })), this.stores.spacePermissionGroupStore.reset(), this.stores.addMemberButtonPopupStore.setState({ ...this.stores.addMemberButtonPopupStore.state,
                            open: !1
                        }), O.Kf$(this.environment, {
                            add_member_count: s.length
                        })
                    })), d()(this, "handleAddMemberButtonPopupClose", (() => {
                        this.stores.spacePermissionGroupStore.reset()
                    })), d()(this, "handleShowMoreClick", (() => {
                        this.stores.spacePermissionGroupStore.setState({ ...this.stores.spacePermissionGroupStore.state,
                            limitUsers: !1
                        })
                    }))
                }
                renderComponent() {
                    const {
                        store: e,
                        group: t,
                        spacePermissionsSettingsStore: s,
                        disabled: i
                    } = this.props, {
                        groupsFilter: r
                    } = s.state, {
                        limitUsers: a
                    } = this.stores.spacePermissionGroupStore.state, d = Be.k({
                        intl: this.props.intl,
                        group: t
                    }), {
                        countRemainingUsers: l,
                        totalNumberMembers: u,
                        limitedUserValues: c
                    } = Be.r({
                        group: t,
                        spaceStore: e,
                        limit: a && !r ? Ae.defaultLimit : void 0
                    }), g = p().sortBy(c, (e => (0, h.of)(e))), v = (r ? (0, f.ZP)(r, g, (e => (0, h.of)(e))) : g).sort(((t, s) => {
                        if (!e.state.value) return 0;
                        const i = e.state.value;
                        return Number((0, Fe.wv)(i, s.id)) - Number((0, Fe.wv)(i, t.id))
                    })), {
                        mouseEntered: S
                    } = this.stores.mouseStore.state, b = S && !Ze.Z.state.isKeyboardMode && !i, {
                        editingNameGroupId: M,
                        groupNameInputValue: y
                    } = s.state;
                    return n()("div", {
                        style: {
                            marginBottom: 36,
                            fontSize: 14,
                            width: "100%"
                        },
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onMouseDown: this.handleMouseDown
                    }, void 0, n()("div", {
                        style: {
                            display: "flex"
                        }
                    }, void 0, !i && n()(he.Z, {
                        isVisible: !0,
                        animationStyle: {
                            opacity: b ? 1 : 0
                        },
                        enterAnimationStyle: {
                            opacity: 0
                        },
                        exitAnimationStyle: {
                            opacity: 0
                        },
                        render: () => n()("div", {
                            style: {
                                marginLeft: -24,
                                marginRight: 4
                            },
                            className: Ae.dragHandleClass
                        }, void 0, n()(Se.Z, {
                            hideClickMessage: !0
                        }))
                    }), n()(oe.Z, i ? {
                        disabled: !0,
                        icon: t.icon ? {
                            pointer: e.pointer,
                            icon: t.icon
                        } : void 0,
                        size: 22,
                        isEmptyPage: !1,
                        title: d,
                        style: {
                            marginLeft: 3,
                            marginRight: 3
                        }
                    } : {
                        disabled: !1,
                        bucket: "public",
                        icon: t.icon ? {
                            pointer: e.pointer,
                            icon: t.icon
                        } : void 0,
                        size: 22,
                        isEmptyPage: !1,
                        title: d,
                        onChange: this.handleIconChange,
                        style: {
                            marginLeft: 3,
                            marginRight: 3
                        }
                    }), M === t.id ? n()(Me.Z, {
                        capture: !0,
                        onEsc: this.handleNameCancel
                    }, void 0, n()(ye.Z, {
                        disabled: i,
                        type: ye.Z.Type.Inline,
                        style: {
                            marginLeft: 4,
                            cursor: "text",
                            fontWeight: we.Z.fontWeight.semibold
                        },
                        placeholderStyle: {
                            marginLeft: 4,
                            cursor: "text",
                            color: this.theme.lightTextColor,
                            fontWeight: we.Z.fontWeight.semibold
                        },
                        placeholder: this.props.intl.formatMessage({
                            id: "spacePermissionsSettings.groupsTab.userGroup.groupNameInput.placeholder",
                            defaultMessage: "Untitled"
                        }),
                        focus: !0,
                        value: y,
                        onChange: this.handleNameChange,
                        onBlur: this.handleNameAccept,
                        onSubmit: this.handleNameAccept
                    })) : n()(V.Z, {
                        isSmall: !0,
                        style: {
                            fontWeight: we.Z.fontWeight.semibold,
                            marginLeft: -2,
                            marginTop: -1
                        },
                        onClick: this.handleRename,
                        disabled: i,
                        className: "notranslate"
                    }, void 0, d), u > 0 && n()("div", {
                        style: {
                            alignItems: "center",
                            marginLeft: 8,
                            color: this.theme.mediumTextColor
                        },
                        className: "notranslate"
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.groupsTab.userGroup.memberCount",
                        defaultMessage: "{numberOfGroupMembers, plural, one {{numberOfGroupMembers} member} other {{numberOfGroupMembers} members}}",
                        values: {
                            numberOfGroupMembers: u
                        }
                    })), n()("div", {
                        style: {
                            flexGrow: 1
                        }
                    }), !i && n()(k.Z, {
                        popupType: de.kQ.Popup,
                        render: this.renderActionMenu,
                        buttonPopupStore: this.stores.actionMenuButtonPopupStore,
                        renderOrigin: e => m().createElement(ke.Z, o()({
                            icon: H.Z.dots
                        }, e))
                    })), n()(w.Z, {
                        size: 12
                    }), v.map(this.renderUser), l > 0 && n()("div", {}, void 0, n()(V.Z, {
                        isGray: !0,
                        style: {
                            marginTop: 4
                        },
                        onClick: this.handleShowMoreClick
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.groupsTab.showMoreUsersButton.label",
                        defaultMessage: "{numberOfHiddenUsers, plural, one {Show {numberOfHiddenUsers} more} other {Show {numberOfHiddenUsers} more}}",
                        values: {
                            numberOfHiddenUsers: l
                        }
                    }))), !i && n()(k.Z, {
                        popupType: de.kQ.Popup,
                        render: this.renderAddMemberMenu,
                        buttonPopupStore: this.stores.addMemberButtonPopupStore,
                        onClose: this.handleAddMemberButtonPopupClose,
                        style: {
                            width: 400
                        },
                        renderOrigin: e => n()("div", {}, void 0, m().createElement(V.Z, o()({
                            isGray: !0,
                            icon: H.Z.plus,
                            style: {
                                marginTop: 4
                            }
                        }, e), n()(K.FormattedMessage, {
                            id: "spacePermissionsSettings.groupsTab.groupList.addMemberButton.label",
                            defaultMessage: "Add members"
                        })))
                    }))
                }
            }
            d()(Ae, "dragHandleClass", "drag_handle"), d()(Ae, "defaultLimit", 10);
            const Re = (0, K.injectIntl)(Ae);
            var Ue = s(15510),
                Ee = s(88632),
                De = s(92083),
                Oe = s(42402),
                Ne = s(33058),
                _e = s(74523),
                Ve = s(46951),
                He = s(47714),
                We = s(66055),
                ze = s(68932),
                Ke = s(33665),
                qe = s(23189),
                je = s(69435),
                Ye = s(97880),
                Je = s(77907),
                Qe = s(38755),
                Xe = s(21752),
                $e = s(14947),
                et = s(95155);
            class tt extends y.Z {
                constructor(...e) {
                    super(...e), d()(this, "storeTypes", {
                        spacePermissionsSettingsStore: b.Z
                    }), d()(this, "renderSpaceGroup", (e => {
                        const {
                            store: t
                        } = this.props, {
                            spacePermissionsSettingsStore: s
                        } = this.stores;
                        return n()(Re, {
                            store: t,
                            group: e,
                            spacePermissionsSettingsStore: s,
                            disabled: !this.canEditGroups()
                        }, e.id)
                    })), d()(this, "handleUpdateClick", (() => {
                        const e = (0, K.defineMessages)({
                            updatingPermissions: {
                                id: "spacePermissionsSettings.updatePermissionsMessage",
                                defaultMessage: "Updating…"
                            }
                        });
                        N.j({
                            message: e.updatingPermissions
                        })
                    })), d()(this, "handleUpdateComplete", (() => {
                        N.x()
                    })), d()(this, "handleTabClick", (e => {
                        const t = e;
                        switch (t) {
                            case b.Q.Members:
                                O.qTS(this.environment, {
                                    tab: "members"
                                });
                                break;
                            case b.Q.Groups:
                                O.qTS(this.environment, {
                                    tab: "groups"
                                });
                                break;
                            case b.Q.Guests:
                                O.qTS(this.environment, {
                                    tab: "guests"
                                });
                                break;
                            default:
                                (0, Ye.t1)(t)
                        }
                        this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
                            currentTab: e
                        })
                    })), d()(this, "handleCreateGroupClick", (() => {
                        U.createAndCommit(this.environment, (e => {
                            const t = S.mo({
                                spaceStore: this.props.store,
                                transaction: e
                            });
                            t && this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
                                editingNameGroupId: t.id,
                                groupNameInputValue: ""
                            })
                        })), O.O8v(this.environment)
                    })), d()(this, "handleGroupReorder", (e => {
                        const t = this.props.store.getValue();
                        if (t) {
                            const s = t.permission_groups || [],
                                i = p().compact(e.map((e => s.find((t => t.id === e)))));
                            U.createAndCommit(this.environment, (e => {
                                S.oD({
                                    spaceStore: this.props.store,
                                    groups: i,
                                    transaction: e
                                })
                            }))
                        }
                        O.HCh(this.environment)
                    })), d()(this, "handleFilterChange", (e => {
                        this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
                            groupsFilter: e.target.value
                        })
                    })), d()(this, "handleMembersShowMoreClick", (() => {
                        this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
                            limitMembers: !1
                        })
                    })), d()(this, "handleGuestsShowMoreClick", (() => {
                        this.stores.spacePermissionsSettingsStore.setState({ ...this.stores.spacePermissionsSettingsStore.state,
                            limitGuests: !1
                        })
                    })), d()(this, "handleInviteLinkClick", (() => {
                        const e = !this.getInviteLinkEnabled();
                        O.eoz(this.environment, {
                            enabled: e
                        }), U.createAndCommit(this.environment, (t => {
                            S.ys({
                                transaction: t,
                                spaceStore: this.props.store,
                                inviteLinkEnabled: Boolean(e)
                            })
                        }))
                    })), d()(this, "handleUserHeaderClick", (() => {
                        this.handleSortClick("members", "name")
                    })), d()(this, "handleAccessLevelHeaderClick", (() => {
                        this.handleSortClick("members", "role")
                    })), d()(this, "handleSortClick", ((e, t) => {
                        const s = this.stores.spacePermissionsSettingsStore.state.sorts[e];
                        let i;
                        i = !(!s || s.by !== t) && s.asc, this.stores.spacePermissionsSettingsStore.update((s => ({ ...s,
                            sorts: { ...s.sorts,
                                [e]: {
                                    by: t,
                                    asc: !i
                                }
                            }
                        })))
                    })), d()(this, "handleMemberPermissionRoleChange", (async (e, t, s) => {
                        const {
                            store: i
                        } = this.props, o = this.environment.currentUser.id;
                        if (e.userId === o && "none" === t) {
                            await S.bf({
                                environment: this.environment,
                                spaceId: i.id,
                                userSettingsStore: s
                            }) && De.ZP.setState({ ...De.ZP.state,
                                open: !1
                            })
                        } else this.handleUpdateClick(), "none" === t ? (await G.removeUsersFromSpace(this.environment, {
                            userIds: [e.userId],
                            spaceId: i.id,
                            removePagePermissions: !0,
                            revokeUserTokens: !0
                        }), await A.bi(this.environment)) : await U.createAndCommit(this.environment, (s => v.ep({
                            environment: this.environment,
                            store: i,
                            permissionItems: [{
                                type: "user_permission",
                                role: t,
                                user_id: e.userId
                            }],
                            transaction: s
                        }))), this.handleUpdateComplete()
                    }))
                }
                renderComponent() {
                    const {
                        store: e,
                        isMobile: t
                    } = this.props;
                    if (!Ee.Z.state.online) return this.renderOfflineMessage();
                    const {
                        data: s
                    } = z.default.state;
                    if (!s) return this.renderLoadingSpinner();
                    const i = W.uF(s);
                    if (!p().every(i.map((t => M.Z.createChildStore(e, {
                            table: h.KJ,
                            id: t.userId
                        }).isReady())))) return this.renderLoadingSpinner();
                    const o = i.filter(c.CF),
                        r = i.filter(c.du),
                        {
                            currentTab: a
                        } = this.stores.spacePermissionsSettingsStore.state;
                    if (t) return n()(u.Fragment, {}, void 0, this.canAdmin() && n()(B.Z, {
                        shouldShowBottomDivider: !0
                    }, void 0, this.renderMobileInviteButton(), n()("div", {
                        style: this.mobileMenuItemStyle()
                    }, void 0, this.renderInviteLink())), n()(B.Z, {}, void 0, this.renderSpaceMembers(o)));
                    const d = [n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.membersTab.title",
                        defaultMessage: "Members ({numberOfMembers})",
                        values: {
                            numberOfMembers: o.length
                        }
                    }), n()(K.FormattedMessage, {
                        id: "spaceBasicSettings.groupsTab.title",
                        defaultMessage: "Groups"
                    })];
                    return r.length > 0 && d.push(n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.guestsTab.title",
                        defaultMessage: "Guests ({numberOfGuests})",
                        values: {
                            numberOfGuests: r.length
                        }
                    })), n()($.Z, {}, void 0, n()(te.Z, {
                        tabs: d,
                        selectedIndex: a,
                        onChange: this.handleTabClick,
                        style: {
                            paddingLeft: 0,
                            paddingRight: 0,
                            marginTop: -6,
                            marginBottom: 14
                        },
                        tabTitleStyle: {
                            fontSize: 16
                        }
                    }), this.renderTab(a, o, r))
                }
                renderLoadingSpinner() {
                    return n()(ze.Z, {
                        style: {
                            margin: "calc(50% - 1em) auto"
                        }
                    })
                }
                renderOfflineMessage() {
                    return n()(Ve.Z, {
                        isSmall: !0,
                        style: {
                            textAlign: "center"
                        }
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.offlineMessage",
                        defaultMessage: "Please go online to manage members."
                    }))
                }
                renderHelp() {
                    return n()("div", {
                        style: {
                            marginTop: 24,
                            marginBottom: 24
                        }
                    }, void 0, n()(_e.Z, {
                        title: n()(K.FormattedMessage, {
                            id: "spacePermissionsSettings.helpButton.caption",
                            defaultMessage: "Learn about adding members to your workspace"
                        }),
                        href: (0, Ke.UY)("guides.members"),
                        analyticsFrom: "members_settings"
                    }))
                }
                renderTab(e, t, s) {
                    return e === b.Q.Members ? n()(u.Fragment, {}, void 0, this.renderSpaceMembers(t)) : e === b.Q.Guests ? n()(u.Fragment, {}, void 0, this.renderSpaceGuests(s)) : this.renderGroupsTab()
                }
                renderGroupsTab() {
                    const {
                        store: e
                    } = this.props, {
                        groupsFilter: t
                    } = this.stores.spacePermissionsSettingsStore.state, s = e.getValue(), i = this.canUseGroups(), r = this.canEditGroups();
                    if (s) {
                        const e = s.permission_groups || [];
                        return n()("div", {}, void 0, i ? n()(Ve.Z, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: {
                                width: "80%"
                            }
                        }, void 0, n()(K.FormattedMessage, {
                            id: "spacePermissionsSettings.groupsTab.caption",
                            defaultMessage: "Set up groups to conveniently control page permissions from the share menu."
                        })) : n()(je.Z, {
                            for: "team",
                            from: "permission_groups",
                            icon: H.Z.group,
                            title: n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.upgradeTitle",
                                defaultMessage: "Upgrade to create groups"
                            }),
                            caption: n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.upgradeCaption",
                                defaultMessage: "Upgrade to the Team Plan to set up groups and control permissions from the share menu."
                            }),
                            learnMoreRoute: "guides.groups"
                        }), n()(w.Z, {
                            size: 24,
                            isHidden: !0
                        }), n()("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }
                        }, void 0, i && n()(E.Z, {
                            renderTooltip: () => this.canAdmin() ? n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.upgradeMessage",
                                defaultMessage: "Upgrade to Team or Enterprise to use permission groups."
                            }) : n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.adminsOnly",
                                defaultMessage: "Only admins can add a permission group."
                            }),
                            render: e => m().createElement(Ce.Z, o()({
                                isLarge: !0,
                                onClick: this.handleCreateGroupClick,
                                disabled: !r
                            }, r ? void 0 : e), n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.groupsTab.createGroupButton.label",
                                defaultMessage: "Create a group"
                            }))
                        }), e.length > 0 && n()(Q.Z, {
                            placeholder: this.props.intl.formatMessage({
                                id: "spacePermissionsSettings.groupsTab.filterGroupsInput.placeholder",
                                defaultMessage: "Filter by email or name…"
                            }),
                            left: H.Z.searchThick(this.getSearchIconStyle()),
                            showClearButton: !0,
                            format: Q.Z.Format.Small,
                            value: t,
                            style: { ...tt.filterStyle,
                                marginRight: 0
                            },
                            onChange: this.handleFilterChange
                        })), e.length > 0 && n()(w.Z, {
                            size: 24,
                            style: {
                                marginBottom: 24
                            }
                        }), r ? n()(Ue.Z, {
                            direction: Ue.K.Vertical,
                            keys: e.map((e => e.id)),
                            renderKey: (t, s) => this.renderSpaceGroup(e[s]),
                            isFullWidth: !0,
                            onDrop: this.handleGroupReorder
                        }) : n()("div", {}, void 0, e.map(this.renderSpaceGroup)))
                    }
                }
                renderSpaceMembers(e) {
                    return this.props.isMobile ? this.renderMobileMemberList(e) : n()("div", {}, void 0, !this.shouldRenderUpsell() && this.renderHelp(), this.shouldRenderUpsell() && this.renderUpsell(), this.renderInviteLink(), this.renderDesktopMemberList(e))
                }
                renderInviteLink() {
                    if (!this.canUseInviteLink()) return;
                    const e = this.getInviteLink(),
                        t = this.getInviteLinkEnabled();
                    if (!e) return;
                    const {
                        spacePermissionsSettingsStore: s
                    } = this.stores;
                    return n()("div", {}, void 0, n()("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            cursor: "pointer"
                        }
                    }, void 0, n()("div", {
                        style: {
                            marginRight: 8,
                            flexGrow: 1
                        }
                    }, void 0, n()(qe.Z, {}, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.inviteLink.title",
                        defaultMessage: "Invite link"
                    })), n()(Ve.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "85%"
                        }
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionSettings.spaceMembers.inviteLink.caption",
                        defaultMessage: "Share this secret link to invite people to this workspace. Only admins can see this."
                    }), " ", !this.props.isMobile && this.renderInviteLinkReset())), n()("div", {
                        style: {
                            marginTop: 5
                        }
                    }, void 0, n()(He.Z, {
                        on: t,
                        onClick: this.handleInviteLinkClick
                    }))), s && t && e && this.renderInviteLinkUrl(e), n()(w.Z, {
                        size: 40
                    }))
                }
                renderInviteLinkReset() {
                    const {
                        store: e
                    } = this.props, t = e.getValue();
                    if (t) return n()(K.FormattedMessage, {
                        id: "spacePermissionSettings.spaceMembers.inviteLink.resetLink",
                        defaultMessage: "You can <resetlink>reset the link</resetlink> for all space members to generate a new invite link.",
                        values: {
                            resetlink: (...e) => n()(Oe.Z, {
                                onClick: () => {
                                    L.showDialog({
                                        message: n()(K.FormattedMessage, {
                                            id: "spacePermissionsSettings.inviteLinkRefreshModal.description",
                                            defaultMessage: "Are you sure you want to reset the invite link for all space members? Your old one will no longer be able to be used."
                                        }),
                                        showCancel: !0,
                                        keepFocus: !1,
                                        handleCancel: L.dismissDialog,
                                        items: [{
                                            label: n()(K.FormattedMessage, {
                                                id: "spacePermissionsSettings.inviteLinkRefreshModal.accept",
                                                defaultMessage: "Reset"
                                            }),
                                            color: "red",
                                            onAccept: async () => {
                                                await G.refreshInviteLink(this.environment, {
                                                    spaceId: t.id
                                                }), A.bi(this.environment)
                                            }
                                        }]
                                    })
                                }
                            }, void 0, e)
                        }
                    })
                }
                renderInviteLinkUrl(e) {
                    const {
                        mobileNative: t
                    } = this.environment, s = n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.inviteLink.copyButton",
                        defaultMessage: "Copy link"
                    }), i = () => {
                        We.RD({
                            environment: this.environment,
                            stringValue: e,
                            copiedMessage: We.tq.copiedLinkToClipboard
                        }), O.nlj(this.environment)
                    }, o = () => {
                        t && t.share(e), O.nlj(this.environment)
                    };
                    return this.props.isMobile ? n()("div", {}, void 0, n()(Q.Z, {
                        type: "text",
                        format: Q.B.Default,
                        value: e,
                        disabled: !0
                    }), t ? n()(_.Z, {
                        onClick: o,
                        style: {
                            marginTop: 10,
                            width: "100%"
                        }
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.inviteLink.shareButton",
                        defaultMessage: "Share link"
                    })) : n()(_.Z, {
                        onClick: i,
                        style: {
                            marginTop: 10,
                            width: "100%"
                        }
                    }, void 0, s)) : n()("div", {}, void 0, n()("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            marginTop: 12
                        }
                    }, void 0, n()(Q.Z, {
                        type: "text",
                        format: Q.B.Default,
                        value: e,
                        disabled: !0,
                        style: {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            width: "calc(100% - 90px)",
                            height: 32
                        }
                    }), n()(Ce.Z, {
                        onClick: i,
                        style: {
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            width: 90
                        },
                        isLarge: !0
                    }, void 0, s)))
                }
                renderMobileMemberList(e) {
                    const {
                        store: t
                    } = this.props;
                    return n()(u.Fragment, {}, void 0, e.map((e => {
                        const s = M.Z.createChildStore(t, {
                            table: h.KJ,
                            id: e.userId
                        }).getValue();
                        return n()("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                padding: 10,
                                borderBottom: "1px solid ".concat(this.theme.lightDividerColor),
                                background: this.theme.cardContentBackground
                            }
                        }, void 0, this.renderMember(s), n()("div", {
                            style: {
                                textAlign: "center",
                                marginLeft: "auto"
                            }
                        }, void 0, this.renderUserPermission(e)))
                    })))
                }
                renderUpsell() {
                    const {
                        data: e
                    } = z.default.state, t = e && !W.Ln(this.environment, e) && "subscribed_admin" !== e.type ? "team_free" : "team";
                    return m().createElement(m().Fragment, null, n()(je.Z, {
                        for: t,
                        from: "members_settings",
                        icon: H.Z.membersFilled,
                        title: n()(K.FormattedMessage, {
                            id: "spacePermissionSettings.memberUpsell.title",
                            defaultMessage: "Share with unlimited members"
                        }),
                        caption: n()(K.FormattedMessage, {
                            id: "spacePermissionSettings.memberUpsell.caption",
                            defaultMessage: "Try Notion for Teams for a collaborative workspace, unlimited team members, and advanced permissions."
                        }),
                        learnMoreRoute: "guides.members",
                        upgradeMessage: n()(K.FormattedMessage, "team_free" === t ? {
                            id: "spacePermissionSettings.memberUpsell.alternativeTrialLabel",
                            defaultMessage: "Try it free"
                        } : {
                            id: "spacePermissionSettings.memberUpsell.alternativeUpgradeLabel",
                            defaultMessage: "Upgrade to Team Plan"
                        })
                    }), n()(w.Z, {
                        size: 48
                    }))
                }
                renderDesktopMemberList(e) {
                    const {
                        spacePermissionsSettingsStore: t
                    } = this.stores, {
                        membersFilter: s,
                        limitMembers: i
                    } = t.state, o = this.getFilteredMembers(e, s), r = this.sortUsers("members", o), a = i ? r.slice(0, tt.defaultLimit) : r;
                    return n()(m().Fragment, {}, void 0, n()("div", {
                        style: {
                            marginRight: 8,
                            flexGrow: 1
                        }
                    }, void 0, n()(qe.Z, {}, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.spaceMembers.members.title",
                        defaultMessage: "Members"
                    }))), this.renderInviteViaDomainCaption(), n()(w.Z, {
                        size: 16,
                        isHidden: !0
                    }), n()("div", {}, void 0, n()("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 16
                        }
                    }, void 0, this.renderInviteButton(), n()(Q.Z, {
                        placeholder: this.props.intl.formatMessage({
                            id: "spacePermissionsSettings.membersTab.filterMembersInput.placeholder",
                            defaultMessage: "Filter by email or name…"
                        }),
                        left: H.Z.searchThick(this.getSearchIconStyle()),
                        showClearButton: !0,
                        format: Q.Z.Format.Small,
                        value: s,
                        style: tt.filterStyle,
                        onChange: e => {
                            t.setState({ ...t.state,
                                membersFilter: e.target.value,
                                limitMembers: !0
                            })
                        }
                    })), this.renderUserTable("members", a), r.length > tt.defaultLimit && i && n()(Ne.Z, {
                        style: tt.showMoreButtonStyle,
                        onClick: this.handleMembersShowMoreClick
                    }, void 0, n()(K.FormattedMessage, {
                        defaultMessage: "Show {moreMembersCount} more",
                        id: "spacePermissionsSettings.membersTab.showMore.message",
                        values: {
                            moreMembersCount: r.length - tt.defaultLimit
                        }
                    }))))
                }
                renderSpaceGuests(e) {
                    const {
                        spacePermissionsSettingsStore: t
                    } = this.stores, {
                        guestsFilter: s,
                        limitGuests: i
                    } = t.state, o = this.getFilteredMembers(e, s), r = this.sortUsers("guests", o), a = i ? r.slice(0, tt.defaultLimit) : r;
                    return n()("div", {}, void 0, n()("div", {}, void 0, n()("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 16
                        }
                    }, void 0, n()(Q.Z, {
                        placeholder: this.props.intl.formatMessage({
                            id: "spacePermissionsSettings.membersTab.filterGuestsInput.placeholder",
                            defaultMessage: "Filter by email or name…"
                        }),
                        left: H.Z.searchThick(this.getSearchIconStyle()),
                        showClearButton: !0,
                        format: Q.Z.Format.Small,
                        value: s,
                        style: tt.filterStyle,
                        onChange: e => {
                            t.setState({ ...t.state,
                                guestsFilter: e.target.value,
                                limitGuests: !0
                            })
                        }
                    })), this.renderUserTable("guests", a), r.length > tt.defaultLimit && i && n()(Ne.Z, {
                        style: tt.showMoreButtonStyle,
                        onClick: this.handleGuestsShowMoreClick
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spacePermissionsSettings.membersTab.showMoreGuestsButton.label",
                        defaultMessage: "{numberOfHiddenGuests, plural, one {Show {numberOfHiddenGuests} more} other {Show {numberOfHiddenGuests} more}}",
                        values: {
                            numberOfHiddenGuests: r.length - tt.defaultLimit
                        }
                    }))))
                }
                renderMobileInviteButton() {
                    return n()(u.Fragment, {}, void 0, n()("div", {
                        style: this.mobileMenuItemStyle()
                    }, void 0, this.renderInviteButton({
                        flex: 1
                    })), n()("div", {
                        style: {
                            borderBottom: "1px solid ".concat(this.theme.regularDividerColor)
                        }
                    }))
                }
                renderInviteButton(e) {
                    const {
                        store: t
                    } = this.props;
                    return n()(Je.LazyPermissionsInviteWithModal, {
                        disabled: !this.canAdmin(),
                        store: t,
                        onInviteClick: this.handleUpdateClick,
                        onInviteComplete: this.handleUpdateComplete,
                        isSubscribed: this.isSubscribed(),
                        membersOnly: !1,
                        upgradeButtonName: "space_permission_settings",
                        shouldGrow: !1,
                        buttonStyle: e
                    })
                }
                renderInviteViaDomainCaption() {
                    const {
                        store: e
                    } = this.props;
                    return S.LV(e) ? n()(Ve.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%"
                        }
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spaceBasicSettings.membersTab.manageMembersWithLinkCaption",
                        defaultMessage: "Manage members here."
                    })) : n()("div", {}, void 0, n()(Ve.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%",
                            marginBottom: 6
                        }
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spaceBasicSettings.membersTab.manageMembersWithoutLinkCaption",
                        defaultMessage: "Manage members here, or <setupdomainlink>set up a domain</setupdomainlink>, so everyone with allowed email domains can join the workspace automatically.",
                        values: {
                            setupdomainlink: (...e) => n()(Oe.Z, {
                                onClick: () => {
                                    De.ZP.setState({ ...De.ZP.state,
                                        currentTab: "settings"
                                    })
                                }
                            }, void 0, e)
                        }
                    })), n()(Ve.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            width: "80%"
                        }
                    }, void 0, n()(K.FormattedMessage, {
                        id: "spaceBasicSettings.membersTab.payPerMemberCaption",
                        defaultMessage: "Note: you will be charged for each member added. Visit <billingguidelink>our guide</billingguidelink> for more information on how we bill.",
                        values: {
                            billingguidelink: (...e) => n()(Oe.Z, {
                                href: (0, Ke.UY)("guides.billingGuide")
                            }, void 0, e)
                        }
                    })))
                }
                getFilteredMembers(e, t) {
                    const {
                        store: s
                    } = this.props;
                    return t && t.length > 0 ? (0, f.ZP)(t, e, (e => {
                        const t = M.Z.createChildStore(s, {
                            table: h.KJ,
                            id: e.userId
                        }).getValue();
                        return t ? (0, h.of)(t) : ""
                    })) : e
                }
                sortUsers(e, t) {
                    const s = this.stores.spacePermissionsSettingsStore.state.sorts[e];
                    if (!s) return t;
                    const {
                        store: i
                    } = this.props;
                    switch (s.by) {
                        case "role":
                            return t.sort(((e, t) => (g.xm[t.role] - g.xm[e.role]) * (s.asc ? -1 : 1)));
                        case "name":
                            return t.map((e => ({
                                user: e,
                                store: M.Z.createChildStore(i, {
                                    table: h.KJ,
                                    id: e.userId
                                })
                            }))).sort(((e, t) => {
                                const i = e.store.getValue(),
                                    o = t.store.getValue(),
                                    r = (0, h.Nz)(this.props.intl, i),
                                    n = (0, h.Nz)(this.props.intl, o);
                                return r.localeCompare(n) * (s.asc ? 1 : -1)
                            })).map((e => e.user))
                    }
                }
                renderSmallArrow(e) {
                    const {
                        up: t
                    } = e, s = {
                        width: 10,
                        height: 10,
                        marginLeft: 4
                    };
                    return t ? H.Z.arrowDownSmall({ ...s,
                        transform: "rotate(180deg)"
                    }) : H.Z.arrowDownSmall(s)
                }
                renderUserTable(e, t) {
                    const {
                        store: s
                    } = this.props, i = this.stores.spacePermissionsSettingsStore.state.sorts[e], o = "on" === et.default.getGroup("workspace-user-sort-and-filter");
                    return n()(ee.Z, {
                        columns: [{
                            key: "user",
                            header: n()($e.Z, {
                                disabled: !o,
                                ignoreLocalHoverState: !0,
                                onClick: () => {
                                    this.handleSortClick(e, "name")
                                },
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                }
                            }, void 0, n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.userTable.userColumn.header",
                                defaultMessage: "User"
                            }), i && "name" === i.by ? this.renderSmallArrow({
                                up: i.asc
                            }) : null),
                            style: {
                                width: "75%"
                            }
                        }, {
                            key: "access_level",
                            header: n()($e.Z, {
                                disabled: !o,
                                ignoreLocalHoverState: !0,
                                onClick: () => {
                                    this.handleSortClick(e, "role")
                                },
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                            }, void 0, n()(K.FormattedMessage, {
                                id: "spacePermissionsSettings.userTable.accessLevelColumn.header",
                                defaultMessage: "Access level"
                            }), i && "role" === i.by ? this.renderSmallArrow({
                                up: i.asc
                            }) : null),
                            style: {
                                width: "25%",
                                textAlign: "center"
                            }
                        }],
                        rows: t.map((e => ({
                            member: e,
                            store: M.Z.createChildStore(s, {
                                table: h.KJ,
                                id: e.userId
                            })
                        }))).filter((e => void 0 !== e.store.getValue())).map((e => {
                            const {
                                member: t,
                                store: s
                            } = e, i = s.getValue();
                            return {
                                key: t.userId,
                                columns: [this.renderMember(i), n()("div", {
                                    style: {
                                        textAlign: "center"
                                    }
                                }, void 0, this.renderUserPermission(t))]
                            }
                        }))
                    })
                }
                renderMember(e) {
                    return n()(Xe.Z, {
                        userValue: e
                    })
                }
                renderUserPermission(e) {
                    return "none" === e.role ? n()(J, {
                        store: this.props.store,
                        guest: e,
                        isSubscribed: this.isSubscribed()
                    }) : this.renderMemberRoleSelect(e)
                }
                renderMemberRoleSelect(e) {
                    const t = this.environment.currentUser.id,
                        {
                            currentUserSettingsStore: s
                        } = Ie.default.state;
                    if (s) return n()(X.Z, {
                        role: e.role,
                        table: se.bx,
                        type: "user_permission",
                        disabled: !this.canAdmin(),
                        isUserPermission: e.userId === t,
                        isSubscribed: this.isSubscribed(),
                        upgradeButtonName: "space_permission_item",
                        onChange: t => this.handleMemberPermissionRoleChange(e, t, s)
                    })
                }
                isSubscribed() {
                    const {
                        data: e
                    } = z.default.state;
                    return Boolean(e && W.YK(e))
                }
                canAdmin() {
                    return this.props.store.canAdmin()
                }
                canUseGroups() {
                    return W.qF(this.environment) && this.isSubscribed()
                }
                canEditGroups() {
                    return this.canUseGroups() && this.canAdmin()
                }
                canUseInviteLink() {
                    return this.canAdmin() && W.qF(this.environment)
                }
                shouldRenderUpsell() {
                    const e = this.props.store.getValue();
                    return Boolean(e && "personal" === e.plan_type && this.canAdmin())
                }
                getInviteLinkEnabled() {
                    const e = this.props.store.getValue();
                    return Boolean(e && e.invite_link_enabled)
                }
                getInviteLink() {
                    const e = z.default.state.data,
                        t = this.props.store.id,
                        s = !e || "subscribed_admin" !== e.type && "unsubscribed_admin" !== e.type ? void 0 : e.inviteLinkCode;
                    if (s) return (0, Qe.createSpaceInviteLinkUrl)(this.environment, t, s)
                }
                getSearchIconStyle() {
                    return {
                        width: 14,
                        height: 14,
                        marginRight: 6,
                        flexGrow: 0,
                        flexShrink: 0,
                        fill: this.theme.mediumIconColor
                    }
                }
                mobileMenuItemStyle() {
                    const {
                        WindowSizeStore: e
                    } = this.environment;
                    return {
                        display: "flex",
                        paddingTop: 14,
                        paddingBottom: 14,
                        paddingLeft: 14,
                        paddingRight: e.getSafePaddingRightCSS(14),
                        background: this.theme.cardContentBackground
                    }
                }
            }
            d()(tt, "defaultLimit", 50), d()(tt, "filterStyle", {
                maxWidth: 250,
                borderRadius: 30
            }), d()(tt, "showMoreButtonStyle", {
                marginTop: 8
            });
            const st = (0, K.injectIntl)(tt)
        },
        42982: (e, t, s) => {
            s.d(t, {
                Z: () => m
            });
            var i = s(98135),
                o = s.n(i),
                r = (s(67294), s(5366)),
                n = s(66832),
                a = s(47966),
                d = s(23189),
                l = s(46951),
                p = s(86512);
            class u extends n.Z {
                renderComponent() {
                    return o()("div", {}, void 0, this.renderHeader(), o()("div", {
                        style: this.getSettingsOptionStyle()
                    }, void 0, o()(l.Z, {
                        isSmall: !0,
                        isMultiline: !0,
                        style: {
                            marginTop: 2,
                            width: "80%"
                        }
                    }, void 0, this.renderMessage()), this.renderManageSubscriptionButton()))
                }
                renderHeader() {
                    const {
                        device: e
                    } = this.environment;
                    return o()(d.Z, {
                        large: !e.isMobile || void 0,
                        divider: e.isMobile ? void 0 : "full"
                    }, void 0, o()(r.FormattedMessage, {
                        id: "subscriptionSettings.title",
                        defaultMessage: "Subscription"
                    }))
                }
                renderMessage() {
                    const {
                        device: e
                    } = this.environment;
                    return e.isMobile ? o()(r.FormattedMessage, {
                        id: "subscriptionSettings.mobileDescription",
                        defaultMessage: "Manage your Personal Pro subscription though the App Store.",
                        description: "Description for a button that will take users to Apple's App Store app to edit their subscription."
                    }) : o()(r.FormattedMessage, {
                        id: "subscriptionSettings.description",
                        defaultMessage: "You're currently subscribed through an in-app purchase with Apple. You can manage your subscription in Apple's subscription settings.",
                        description: "Description for a button that will take users to Apple's App Store app to edit their subscription."
                    })
                }
                renderManageSubscriptionButton() {
                    return o()(p.Z, {
                        href: "https://apps.apple.com/account/subscriptions"
                    }, void 0, o()(a.Z, {
                        isLarge: !0,
                        style: {
                            marginTop: 12,
                            marginBottom: 4
                        }
                    }, void 0, o()(r.FormattedMessage, {
                        id: "subscriptionSettings.button",
                        defaultMessage: "Manage subscription"
                    })))
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            const m = u
        },
        40235: (e, t, s) => {
            s.d(t, {
                Z: () => u
            });
            var i = s(98135),
                o = s.n(i),
                r = s(59713),
                n = s.n(r),
                a = (s(67294), s(66832)),
                d = s(46951),
                l = s(82990);
            class p extends a.Z {
                renderComponent() {
                    const {
                        columns: e,
                        rows: t
                    } = this.props;
                    return o()("table", {
                        style: this.getStyle()
                    }, void 0, o()("thead", {}, void 0, o()("tr", {
                        style: p.headerRowStyle
                    }, void 0, e.map((e => o()("th", {
                        style: { ...p.tableHeaderStyle,
                            ...e.style
                        }
                    }, e.key, o()(d.Z, {
                        isSmall: !0
                    }, void 0, e.header)))))), o()("tbody", {}, void 0, t.map((t => o()("tr", {
                        style: this.getRowStyle()
                    }, t.key, t.columns.map(((t, s) => {
                        const i = e[s];
                        return o()("td", {
                            style: p.cellStyle
                        }, i.key, t)
                    })))))))
                }
                getStyle() {
                    return {
                        width: "100%",
                        fontSize: 13,
                        borderTop: "1px solid ".concat(this.theme.regularDividerColor),
                        borderBottom: "1px solid ".concat(this.theme.regularDividerColor)
                    }
                }
                getRowStyle() {
                    return {
                        width: "100%",
                        borderTop: "1px solid ".concat(this.theme.regularDividerColor)
                    }
                }
            }
            n()(p, "cellPaddingTopBottom", 8), n()(p, "headerRowStyle", {
                height: 32,
                width: "100%"
            }), n()(p, "tableHeaderStyle", {
                fontWeight: l.Z.fontWeight.regular,
                textAlign: "left",
                paddingTop: p.cellPaddingTopBottom,
                paddingBottom: p.cellPaddingTopBottom
            }), n()(p, "cellStyle", {
                paddingTop: p.cellPaddingTopBottom,
                paddingBottom: p.cellPaddingTopBottom
            });
            const u = p
        },
        69435: (e, t, s) => {
            s.d(t, {
                Z: () => S
            });
            var i = s(98135),
                o = s.n(i),
                r = s(59713),
                n = s.n(r),
                a = (s(33948), s(67294), s(66832)),
                d = s(72693),
                l = s(47966),
                p = s(33665),
                u = s(50906),
                m = s(93678),
                c = s(26111),
                g = s(82990),
                h = s(5366);
            class v extends a.Z {
                constructor(...e) {
                    super(...e), n()(this, "handleUpgradeClick", (e => {
                        const {
                            from: t,
                            for: s,
                            onUpgradeClick: i
                        } = this.props;
                        m.y(this.environment, {
                            from: t,
                            for: s
                        }), i && i(e)
                    })), n()(this, "handleLearnMoreClick", (() => {
                        const {
                            from: e,
                            learnMoreRoute: t
                        } = this.props;
                        (0, c.navigateToExternalURL)({
                            environment: this.environment,
                            url: (0, p.UY)(t)
                        }), u.Fsx(this.environment, {
                            from: e
                        })
                    }))
                }
                renderComponent() {
                    return o()("section", {
                        style: this.getWrapStyle()
                    }, void 0, this.renderIcon(), this.renderTitle(), this.renderCaption(), this.renderActions())
                }
                renderIcon() {
                    const {
                        icon: e
                    } = this.props;
                    return e(this.getIconStyle())
                }
                renderTitle() {
                    const {
                        title: e
                    } = this.props;
                    return o()("header", {
                        style: this.getTitleStyle()
                    }, void 0, e)
                }
                renderCaption() {
                    const {
                        caption: e
                    } = this.props;
                    return o()("p", {
                        style: this.getCaptionStyle()
                    }, void 0, e)
                }
                renderActions() {
                    return o()("footer", {}, void 0, this.renderUpgradeButton(), this.renderLearnMoreButton())
                }
                renderUpgradeButton() {
                    const {
                        upgradeMessage: e
                    } = this.props;
                    return o()(d.Z, {
                        onClick: this.handleUpgradeClick,
                        isLarge: !0
                    }, void 0, e || o()(h.FormattedMessage, {
                        defaultMessage: "Upgrade",
                        id: "upsellCallout.upgradeButton.text"
                    }))
                }
                renderLearnMoreButton() {
                    return o()(l.Z, {
                        onClick: this.handleLearnMoreClick,
                        style: this.getLearnMoreButtonStyle()
                    }, void 0, o()(h.FormattedMessage, {
                        defaultMessage: "Learn more",
                        id: "upsellCallout.learnMoreButton.text"
                    }))
                }
                getWrapStyle() {
                    const {
                        device: e
                    } = this.environment;
                    return {
                        fontSize: 14,
                        ...!e.isMobile && {
                            maxWidth: 340
                        }
                    }
                }
                getIconStyle() {
                    return {
                        width: 32,
                        height: "auto",
                        fill: this.theme.mediumIconColor,
                        marginBottom: 8
                    }
                }
                getTitleStyle() {
                    return {
                        fontWeight: g.Z.fontWeight.semibold
                    }
                }
                getCaptionStyle() {
                    return {
                        color: this.theme.mediumTextColor,
                        marginTop: 4,
                        marginBottom: 16
                    }
                }
                getLearnMoreButtonStyle() {
                    return {
                        marginLeft: 12
                    }
                }
            }
            const S = v
        },
        30045: (e, t, s) => {
            s.d(t, {
                Z: () => M
            });
            var i = s(98135),
                o = s.n(i),
                r = s(59713),
                n = s.n(r),
                a = (s(33948), s(67294), s(5366)),
                d = s(66832),
                l = s(46951),
                p = s(72087),
                u = s(63143),
                m = s(7765),
                c = s(4122),
                g = s(27832),
                h = s(61269),
                v = s(17256),
                S = s(47966),
                f = s(23189);
            class b extends d.Z {
                constructor(...e) {
                    super(...e), n()(this, "storeTypes", {
                        requestStore: p.Z
                    }), n()(this, "renderResult", ((e, t, s) => o()(c.Z, {
                        loaded: s,
                        spinnerSize: 16,
                        showSpinnerTimeout: 600
                    }, void 0, e || !t ? o()("div", {}, void 0, this.props.intl.formatMessage({
                        id: "userDataConsent.render.error",
                        defaultMessage: "Something went wrong"
                    })) : this.renderOutput(t)))), n()(this, "renderOutput", (e => {
                        const t = Boolean(e.expiryTime && Number(e.expiryTime) > Date.now()),
                            s = t ? this.revokeDataAccess : this.grantDataAccess;
                        return o()("div", {
                            style: this.getSettingsOptionStyle()
                        }, void 0, o()("div", {
                            style: {
                                display: "flex",
                                alignItems: "flex-start",
                                marginBottom: 12,
                                width: "100%"
                            }
                        }, void 0, o()("div", {
                            style: {
                                flex: 1
                            }
                        }, void 0, o()(f.Z, {}, void 0, o()(a.FormattedMessage, {
                            id: "userDataConsentSettings.header.label",
                            defaultMessage: "Support access"
                        })), o()(l.Z, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: {
                                marginTop: 4,
                                width: "80%"
                            }
                        }, void 0, t && e.expiryTime ? o()(a.FormattedMessage, {
                            id: "userDataConsentSettings.accessGranted.label",
                            defaultMessage: "You have granted Notion access to your account for support purposes until {expiryTime}.",
                            values: {
                                expiryTime: v.Z.unix(e.expiryTime / 1e3).locale(this.props.intl.locale).format("lll")
                            }
                        }) : o()(a.FormattedMessage, {
                            id: "userDataConsentSettings.accessNotGranted.label",
                            defaultMessage: "Grant Notion support temporary access to your account so we can troubleshoot problems or recover content on your behalf. You can revoke access at any time."
                        })), o()(S.Z, {
                            onClick: s,
                            isLarge: !0,
                            style: {
                                marginTop: 12,
                                marginBottom: 4
                            }
                        }, void 0, o()(a.FormattedMessage, t ? {
                            id: "userDataConsentSettings.revokeSupportAccess.button",
                            defaultMessage: "Revoke access"
                        } : {
                            id: "userDataConsentSettings.allowSupportAccess.button",
                            defaultMessage: "Allow support access"
                        })))))
                    })), n()(this, "fetchUserDataConsentSettings", (async e => {
                        const t = await h.getDataAccessConsent(this.environment, {});
                        if ("failed" === t.type) throw t.error;
                        return t.data
                    })), n()(this, "grantDataAccess", (async () => {
                        await this.setDataAccessExpiryTime({
                            expiryTime: Date.now() + 14 * u.A0
                        })
                    })), n()(this, "revokeDataAccess", (async () => {
                        await this.setDataAccessExpiryTime({})
                    })), n()(this, "setDataAccessExpiryTime", (async e => {
                        const t = await h.setDataAccessConsent(this.environment, e);
                        if ("success" === t.type && t.data) {
                            const e = this.stores.requestStore.state;
                            this.stores.requestStore.setState({ ...e,
                                result: t.data
                            })
                        }
                    }))
                }
                renderComponent() {
                    const {
                        currentUserStore: e
                    } = g.default.state;
                    return e && o()(m.Z, {
                        requestStore: this.stores.requestStore,
                        request: {
                            userId: e.id,
                            expiryTime: Date.now() + 14 * u.A0
                        },
                        performRequest: this.fetchUserDataConsentSettings,
                        render: this.renderResult
                    })
                }
                getSettingsOptionStyle() {
                    const {
                        device: e,
                        WindowSizeStore: t
                    } = this.environment;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        height: "auto",
                        paddingLeft: e.isMobile ? t.state.paddingLeftCSS : 0,
                        paddingRight: e.isMobile ? t.state.paddingRightCSS : 0
                    }
                }
            }
            const M = (0, a.injectIntl)(b)
        }
    }
]);