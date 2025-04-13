
import { Router } from 'riza';
import "./main.css";

import "../src/root.css";
import "../src/common.css";
import "../src/dialog.css";
import "../src/btn-strip.css";
import "../src/btn.css";
import "../src/form.css";

const App = () =>
<r-panel data-root="true" class="p-4 s-fill" onCreated={ () => queueMicrotask(() => Router.refresh()) }>

    <button class="btn" onClick={ () => window.document.documentElement.classList.toggle('light-mode') }>Toggle Light/Dark</button>
    <button class="btn" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.toggleVisibility() }>Toggle Dialog</button>

    <hr/>
    <p><b>Buttons</b></p>
    <div class="mb-1">
        <button class="btn">btn</button>
        <button class="btn outline">btn outline</button>
        <button class="btn small">btn small</button>
        <button class="btn small outline">btn small outline</button>
    </div>
    <div class="mb-1">
        <button class="btn primary">btn primary</button>
        <button class="btn primary outline">btn primary outline</button>
        <button class="btn primary small">btn primary small</button>
        <button class="btn primary small outline">btn primary small outline</button>
    </div>
    <div class="mb-1">
        <button class="btn secondary">btn secondary</button>
        <button class="btn secondary outline">btn secondary outline</button>
        <button class="btn secondary small">btn secondary small</button>
        <button class="btn secondary small outline">btn secondary small outline</button>
    </div>
    <div class="mb-1">
        <button class="btn success">btn success</button>
        <button class="btn success outline">btn success outline</button>
        <button class="btn success small">btn success small</button>
        <button class="btn success small outline">btn success small outline</button>
    </div>
    <div class="mb-1">
        <button class="btn warn">btn warn</button>
        <button class="btn warn outline">btn warn outline</button>
        <button class="btn warn small">btn warn small</button>
        <button class="btn warn small outline">btn warn small outline</button>
    </div>
    <div class="mb-1">
        <button class="btn danger">btn danger</button>
        <button class="btn danger outline">btn danger outline</button>
        <button class="btn danger small">btn danger small</button>
        <button class="btn danger small outline">btn danger small outline</button>
    </div>
    <div class="mb-1">
        <button class="btn info">btn info</button>
        <button class="btn info outline">btn info outline</button>
        <button class="btn info small">btn info small</button>
        <button class="btn info small outline">btn info small outline</button>
    </div>
    <div class="mb-1">
        <button class="btn dark">btn dark</button>
        <button class="btn dark outline">btn dark outline</button>
        <button class="btn dark small">btn dark small</button>
        <button class="btn dark small outline">btn dark small outline</button>
    </div>

    <hr/>
    <p><b>Form Elements</b></p>

    <div class="f-row g-2">
        <div class="s-3">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" />
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea></textarea>
            </div>

            <div class="form-group">
                <label>Select Country</label>
                <select>
                    <option>USA</option>
                    <option>Honduras</option>
                    <option>Japan</option>
                </select>
            </div>
        </div>

        <div class="s-3">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" />
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea></textarea>
            </div>

            <div class="form-group">
                <label>Select Country</label>
                <select>
                    <option>USA</option>
                    <option>Honduras</option>
                    <option>Japan</option>
                </select>
            </div>
        </div>
    </div>

    <r-panel class="dialog center" data-ref="dialog">
        <div class="title text-center py-3 fs-1 fw-600">
            <b>Confirmation</b>
        </div>

        <div class="content px-4 pb-3 fs-2d text-center">
            Seg egestas ipsum non pretium efficitur.
            <br/>
            Fusce et luctus velit, ut vehicula nisl.
            <br/>
            Nulla et maximus augue.
            <br/><br/>
        </div>

        <div class="btn-strip">
            <span class="btn outline danger" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.hide() }>Yes</span>
            <span class="btn outline success" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.hide() }>No</span>
        </div>
    </r-panel>

</r-panel>
;

document.body.appendChild(App());
