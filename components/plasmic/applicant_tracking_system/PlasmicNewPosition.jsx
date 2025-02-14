// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9HkzKEQcvqFJBsyMm4sqF8
// Component: cZfaMzU5EgNe
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  initializeCodeComponentStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import PageLayout from "../../PageLayout"; // plasmic-import: zZGps3RDKU3u/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9HkzKEQcvqFJBsyMm4sqF8/projectcss
import sty from "./PlasmicNewPosition.module.css"; // plasmic-import: cZfaMzU5EgNe/css

createPlasmicElementProxy;

export const PlasmicNewPosition__VariantProps = new Array();

export const PlasmicNewPosition__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPosition__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  let [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  const new$Queries = {
    depts: usePlasmicDataOp(() => {
      return {
        sourceId: "vmy97NddY5rLFxdCRZeuG1",
        opId: "95ded3c0-8b2a-4bc4-b508-fbb4b5996c55",
        userArgs: {},
        cacheKey: `plasmic.$.95ded3c0-8b2a-4bc4-b508-fbb4b5996c55.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
          >
            <DataCtxReader__>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"New position"}
                  </h1>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange: async (...eventArgs) => {
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ).apply(null, eventArgs);
                      },
                      formItems: undefined,
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: undefined,
                      onFinish: async values => {
                        const $steps = {};
                        $steps["tutorialdbCreate"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "vmy97NddY5rLFxdCRZeuG1",
                                  opId: "9b1cad17-e509-4940-a972-f94fc7b752f4",
                                  userArgs: {},
                                  cacheKey: null,
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: null
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["tutorialdbCreate"] != null &&
                          typeof $steps["tutorialdbCreate"] === "object" &&
                          typeof $steps["tutorialdbCreate"].then === "function"
                        ) {
                          $steps["tutorialdbCreate"] = await $steps[
                            "tutorialdbCreate"
                          ];
                        }
                        $steps["goToPositions"] = true
                          ? (() => {
                              const actionArgs = {};
                              return (({ destination }) => {
                                if (
                                  typeof destination === "string" &&
                                  destination.startsWith("#")
                                ) {
                                  document
                                    .getElementById(destination.substr(1))
                                    .scrollIntoView({ behavior: "smooth" });
                                } else {
                                  __nextRouter?.push(destination);
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["goToPositions"] != null &&
                          typeof $steps["goToPositions"] === "object" &&
                          typeof $steps["goToPositions"].then === "function"
                        ) {
                          $steps["goToPositions"] = await $steps[
                            "goToPositions"
                          ];
                        }
                      },
                      onIsSubmittingChange: async (...eventArgs) => {
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["form", "isSubmitting"],
                          FormWrapper_Helpers
                        ).apply(null, eventArgs);
                      },
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "form.isSubmitting"
                        }
                      ],

                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      >
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__iSd6L
                          )}
                          label={"Title"}
                          name={"title"}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__wHXyl
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField___1T7Vd
                          )}
                          label={"Description"}
                          name={"description"}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__fnjsx
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField___6EBRv
                          )}
                          label={"Department"}
                          name={"department_id"}
                        >
                          <AntdSelect
                            className={classNames("__wab_instance", sty.select)}
                            defaultStylesClassName={classNames(
                              projectcss.root_reset,
                              projectcss.plasmic_default_styles,
                              projectcss.plasmic_mixins,
                              projectcss.plasmic_tokens,
                              plasmic_antd_5_hostless_css.plasmic_tokens,
                              plasmic_plasmic_rich_components_css.plasmic_tokens
                            )}
                            options={(() => {
                              try {
                                return $queries.depts.data.map(d => ({
                                  label: d.name,
                                  value: d.id
                                }));
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return [];
                                }
                                throw e;
                              }
                            })()}
                            placeholder={"Select..."}
                            popupScopeClassName={sty["select__popup"]}
                          />
                        </FormItemWrapper>
                        <AntdButton
                          className={classNames("__wab_instance", sty.button)}
                          size={"large"}
                          submitsForm={true}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"Submit"}
                          </div>
                        </AntdButton>
                      </FormWrapper>
                    );
                  })()}
                </section>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageLayout",
    "section",
    "h1",
    "form",
    "select",
    "button",
    "text"
  ],

  pageLayout: [
    "pageLayout",
    "section",
    "h1",
    "form",
    "select",
    "button",
    "text"
  ],

  section: ["section", "h1", "form", "select", "button", "text"],
  h1: ["h1"],
  form: ["form", "select", "button", "text"],
  select: ["select"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewPosition__ArgProps,
          internalVariantPropNames: PlasmicNewPosition__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPosition__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPosition";
  } else {
    func.displayName = `PlasmicNewPosition.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "9HkzKEQcvqFJBsyMm4sqF8"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicNewPosition = Object.assign(
  // Top-level PlasmicNewPosition renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    select: makeNodeComponent("select"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicNewPosition
    internalVariantProps: PlasmicNewPosition__VariantProps,
    internalArgProps: PlasmicNewPosition__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPosition;
/* prettier-ignore-end */
